import * as date from 'date-fns';
import { ExtendedNavInvoice, InvoiceType, NavInvoce, invoiceType } from '../partners/partners.type';
import { createWorkbook, emptyColumns } from '../utils/workbook.util';
import { extractInvoiceListFromNavXML, getPartnerReference } from '../utils/invoices.utils';
import { format, parse, resolve } from 'path';
import { hideSpinner, showSpinner } from '../utils/spinner.util';
import {
  invoiceLineTableActions,
  invoiceLineTableColumns,
  invoiceLineTableFields,
  invoiceTableActions,
  invoiceTableColumns,
  invoiceTableFields,
} from './invoices.constants';
import { BigNumber } from 'bignumber.js';
import { InvoiceCommandOptions } from './invoices.type';
import { XMLParser } from 'fast-xml-parser';
import { initExchangeRates } from '../exhange-rates/exhange-rate.utils';
import log from 'npmlog';
import logUpdate from 'log-update';
import { readFile } from 'fs/promises';
import { writeFileSync } from 'fs';

const parser = new XMLParser({
  htmlEntities: true,
  trimValues: true,
});

const prefix = 'Invoices';

export const invoicesAction = async (inputFilePath: string, options: InvoiceCommandOptions) => {
  showSpinner('Processing XML file');
  const maxInvoicesPerFile = parseInt(options.count);
  log.info(prefix, `Processing NAV XML with a per file limit of ${maxInvoicesPerFile}`);
  // Read input file as string
  const xmlSource = await readFile(inputFilePath, { encoding: 'utf-8' });
  // Parse input file as XML
  const content = parser.parse(xmlSource);
  log.info(prefix, 'Successfully parsed XML');
  hideSpinner();

  showSpinner('Loading MNB rates. This could take a few seconds.');
  await initExchangeRates();
  hideSpinner();
  logUpdate('');
  log.info(prefix, 'MNB rates are successfully loaded');

  const absolutePath = resolve(inputFilePath);
  const parsedPath = parse(absolutePath);

  const invoices = extractInvoiceListFromNavXML(content, [invoiceType.normal]);
  const stornoInvoices = extractInvoiceListFromNavXML(content, [invoiceType.storno]);

  const invoiceChunks: NavInvoce[][] = [];
  const stornoChunks: NavInvoce[][] = [];

  // Create equal length chunks from all invoices and generate export files for each of them.
  while (invoices.length > 0) invoiceChunks.push(invoices.splice(0, maxInvoicesPerFile));
  while (stornoInvoices.length > 0) stornoChunks.push(stornoInvoices.splice(0, maxInvoicesPerFile));

  invoiceChunks.forEach((invoiceChunk, index: number) => {
    const outFileName = `${parse(inputFilePath).name}-${index + 1}.xlsx`;
    const outFilePath = format({ ...parsedPath, ext: 'xlsx', base: outFileName });

    exportInvoices(invoiceChunk, outFilePath, [invoiceType.normal], options.accountNumber);
  });

  stornoChunks.forEach((stornoChunk, index) => {
    const outFileName = `${parse(inputFilePath).name}-storno-${index + 1}.xlsx`;
    const outFilePath = format({ ...parsedPath, ext: 'xlsx', base: outFileName });

    exportInvoices(stornoChunk, outFilePath, [invoiceType.storno], options.accountNumber);
  });
};

export const exportInvoices = async (
  invoices: readonly NavInvoce[],
  outFilePath: string,
  includeOnlyTypes: readonly InvoiceType[] = [],
  accountNumber = '',
) => {
  const workbook = createWorkbook();

  const controlSheet = workbook.addWorksheet('Vezérlés');
  controlSheet.addRow(['Paraméterek az excel tábla értelmezéséhez']);
  controlSheet.addRow('');
  controlSheet.addTable({
    columns: [{ name: 'Paraméter' }, { name: 'Érték' }],
    rows: [
      ['Melyik sor az adat mező technikai neve', '4'],
      ['Mező  nyelvi neve (redundáns adat)', '5'],
      ['Hol kezdődik az adat (sor)', '6'],
      ['Import fülek száma'],
    ],
    name: 'parameterTable',
    ref: 'A3',
  });

  controlSheet.addRow('');

  controlSheet.addTable({
    name: '2',
    ref: 'A10',
    columns: [{ name: 'Osztály technikai neve' }, { name: 'Fül' }, { name: 'Adat azonosítók' }],
    rows: [
      [
        'rEVOLUTION.DEEP.Module.ERP.Financial.FinancialInvoices.FinancialInvoice',
        'Pénzügyi számla',
        'Számlaszám,Pénzügyi számla típus,Partner',
      ],
      ['FinancialInvoiceRows', 'Pénzügyi számla sorok', ''],
      ['FinancialInvoiceInvoiceDetailConnections', 'Egyéb kapcsolt számlák', ''],
      ['FileStorages', 'Csatolt állományok', 'Fájl elérés'],
    ],
  });

  const invoicesSheet = workbook.addWorksheet('Pénzügyi számla');

  invoicesSheet.addRow([]);
  invoicesSheet.addRow([]);
  invoicesSheet.addRow(invoiceTableActions);
  invoicesSheet.addRow(invoiceTableFields);

  invoicesSheet.addTable({
    columns: [...invoiceTableColumns],
    name: 'Invoices',
    ref: 'A5',
    rows: invoices
      .filter((invoice) => includeOnlyTypes.length === 0 || includeOnlyTypes.includes(invoice.fejlec.szlatipus))
      .map((invoice, index) => [
        index + 1,
        ...emptyColumns(1),
        invoice.fejlec.szlatipus === invoiceType.normal ? 'Vevői számla' : 'Vevői sztornó számla',
        getPartnerReference(invoice),
        invoice.fejlec.szlatipus === invoiceType.normal ? '' : invoice.modosito_szla?.eredeti_sorszam,
        ...emptyColumns(2),
        'Belföldi',
        invoice.fejlec.szlasorszam,
        '1',
        '1',
        ...emptyColumns(1),
        invoice.nem_kotelezo.fiz_mod,
        ...emptyColumns(1),
        invoice.zaradekok.penzforgelsz ? 'true' : 'false',
        date.format(date.parse(invoice.fejlec.szladatum, 'yyyy-mm-dd', new Date()), 'yyyy.mm.dd'),
        'false',
        date.format(date.parse(invoice.fejlec.teljdatum, 'yyyy-mm-dd', new Date()), 'yyyy.mm.dd'),
        date.format(date.parse(invoice.nem_kotelezo.fiz_hatarido, 'yyyy-mm-dd', new Date()), 'yyyy.mm.dd'),
        date.format(date.parse(invoice.fejlec.teljdatum, 'yyyy-mm-dd', new Date()), 'yyyy.mm.dd'),
        date.format(
          date.min([
            date.parse(invoice.fejlec.teljdatum, 'yyyy-mm-dd', new Date()),
            date.parse(invoice.fejlec.teljdatum, 'yyyy-mm-dd', new Date()),
          ]),
          'yyyy.mm.dd',
        ),
        '3',
        invoice.nem_kotelezo.penznem,
        invoice.exchangeRate.toFormat(2, { decimalSeparator: ',' }), // Arfolyam 6 tizedesjegyig
        new BigNumber(invoice.osszesites.vegosszeg.bruttoarossz).toFormat(2, { decimalSeparator: ',' }), // Foosszeg
        new BigNumber(invoice.osszesites.vegosszeg.bruttoarossz).times(invoice.exchangeRate).toFormat(2, { decimalSeparator: ',' }), // Foosszeg forintban mindig (2 tizedesig)
        ...emptyColumns(3),
        '1',
        'false',
        invoice.fejlec.szlatipus === invoiceType.normal ? '1' : '3',
        ...emptyColumns(8),
        'false',
        ...emptyColumns(60),
        'false',
        ...emptyColumns(3),
        '1',
        'false',
        'false',
        ...emptyColumns(1),
        'false',
        '1',
        //   ...emptyColumns(1),
      ]),
  });

  const invoiceLineSheet = workbook.addWorksheet('Pénzügyi számla sorok');

  invoiceLineSheet.addRow([]);
  invoiceLineSheet.addRow([]);
  invoiceLineSheet.addRow(invoiceLineTableActions);
  invoiceLineSheet.addRow(invoiceLineTableFields);

  const invoiceLines: (NavInvoce & { reference: number })[] = [];

  invoices.forEach((invoice, index: number) => {
    let parsedInvoice: ExtendedNavInvoice;

    if (!Array.isArray(invoice.termek_szolgaltatas_tetelek)) {
      parsedInvoice = {
        ...invoice,
        termek_szolgaltatas_tetelek: [invoice.termek_szolgaltatas_tetelek],
      };
    } else {
      parsedInvoice = {
        ...invoice,
        termek_szolgaltatas_tetelek: [...invoice.termek_szolgaltatas_tetelek],
      };
    }

    parsedInvoice.termek_szolgaltatas_tetelek.forEach((invoiceLine) => {
      invoiceLines.push({
        ...parsedInvoice,
        termek_szolgaltatas_tetelek: invoiceLine,
        reference: index + 1,
      });
    });

    let grossTotal = new BigNumber(0);

    parsedInvoice.termek_szolgaltatas_tetelek.forEach((line) => (grossTotal = grossTotal.plus(new BigNumber(line.bruttoar))));

    let difference = new BigNumber(parsedInvoice.osszesites.vegosszeg.bruttoarossz).minus(grossTotal);

    if (difference.eq(0)) {
      return;
    }

    if (parsedInvoice.fejlec.szlatipus === invoiceType.storno) {
      difference = difference.times(-1);
    }

    invoiceLines.push({
      ...parsedInvoice,
      termek_szolgaltatas_tetelek: {
        termeknev: difference.isNegative() ? 'Kerekítésből származó egyéb ráfordítás' : 'Kerekítésből származó egyéb bevétel',
        adoertek: 0,
        adokulcs: 'ÁKK',
        bruttoar: difference.toNumber(),
        nettoar: difference.toNumber(),
        besorszam: '',
        kozv_szolgaltatas: false,
        nettoegysar: null as any,
        menny: null as any,
        dohany_ar: null as any,
        mertekegys: null as any,
      },
      reference: index + 1,
    });
  });

  const customVATCodes = [0, 'ÁKK'];

  invoiceLineSheet.addTable({
    columns: [...invoiceLineTableColumns],
    name: 'Invoice lines',
    ref: 'A5',
    rows: [
      ...invoiceLines.map((invoiceLine) => [
        invoiceLine.reference,
        invoiceLine.fejlec.szlasorszam,
        invoiceLine.fejlec.szlatipus === invoiceType.normal ? 'Vevői számla' : 'Vevői sztornó számla',
        getPartnerReference(invoiceLine),
        '1',
        invoiceLine.nem_kotelezo.penznem,
        !Array.isArray(invoiceLine.termek_szolgaltatas_tetelek) &&
        invoiceLine.termek_szolgaltatas_tetelek.termeknev.includes('Kerekítésből')
          ? invoiceLine.termek_szolgaltatas_tetelek.bruttoar < 0
            ? '8698'
            : '9698'
          : accountNumber,
        ...emptyColumns(1),
        invoiceLine.exchangeRate.toFormat(6, { decimalSeparator: ',' }),
        !Array.isArray(invoiceLine.termek_szolgaltatas_tetelek) && invoiceLine.termek_szolgaltatas_tetelek.adokulcs,
        '1',
        !Array.isArray(invoiceLine.termek_szolgaltatas_tetelek) && invoiceLine.termek_szolgaltatas_tetelek.termeknev,
        !Array.isArray(invoiceLine.termek_szolgaltatas_tetelek) &&
          (customVATCodes.includes(invoiceLine.termek_szolgaltatas_tetelek.adokulcs) ? 'false' : 'true'),
        !Array.isArray(invoiceLine.termek_szolgaltatas_tetelek) &&
          (customVATCodes.includes(invoiceLine.termek_szolgaltatas_tetelek.adokulcs) && invoiceLine.zaradekok.penzforgelsz
            ? 'false'
            : 'true'),
        !Array.isArray(invoiceLine.termek_szolgaltatas_tetelek) &&
          (customVATCodes.includes(invoiceLine.termek_szolgaltatas_tetelek.adokulcs) && invoiceLine.zaradekok.penzforgelsz
            ? '3682'
            : '467'),
        !Array.isArray(invoiceLine.termek_szolgaltatas_tetelek) &&
          new BigNumber(invoiceLine.termek_szolgaltatas_tetelek.bruttoar).toFormat(2, { decimalSeparator: ',' }),
        !Array.isArray(invoiceLine.termek_szolgaltatas_tetelek) &&
          new BigNumber(invoiceLine.termek_szolgaltatas_tetelek.bruttoar)
            .times(invoiceLine.exchangeRate)
            .toFormat(2, { decimalSeparator: ',' }),
        !Array.isArray(invoiceLine.termek_szolgaltatas_tetelek) &&
          new BigNumber(invoiceLine.termek_szolgaltatas_tetelek.nettoar).toFormat(2, { decimalSeparator: ',' }),
        !Array.isArray(invoiceLine.termek_szolgaltatas_tetelek) &&
          new BigNumber(invoiceLine.termek_szolgaltatas_tetelek.nettoar)
            .times(invoiceLine.exchangeRate)
            .toFormat(2, { decimalSeparator: ',' }),
        !Array.isArray(invoiceLine.termek_szolgaltatas_tetelek) &&
          new BigNumber(invoiceLine.termek_szolgaltatas_tetelek.adoertek).toFormat(2, { decimalSeparator: ',' }),
        !Array.isArray(invoiceLine.termek_szolgaltatas_tetelek) &&
          new BigNumber(invoiceLine.termek_szolgaltatas_tetelek.adoertek)
            .times(invoiceLine.exchangeRate)
            .toFormat(2, { decimalSeparator: ',' }),
        ...emptyColumns(2),
        'false',
        'false',
      ]),
    ],
  });

  workbook.addWorksheet('Egyéb kapcsolt számlák');
  workbook.addWorksheet('Csatolt állományok');

  writeFileSync('content.json', JSON.stringify(invoices, undefined, 2));
  await workbook.xlsx.writeFile(outFilePath, {});
  //hideSpinner();
  log.info(prefix, 'XLSX files generated successfully');
};
