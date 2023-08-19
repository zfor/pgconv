import { InvoiceType, NavInvoce, invoiceType } from '../partners/partners.type';
import { min, parse } from 'date-fns';
import BigNumber from 'bignumber.js';
import { getRate } from '../exhange-rates/exhange-rate.utils';

export const extractInvoiceListFromNavXML = (content: unknown, includeOnlyTypes: InvoiceType[] = [invoiceType.normal]): NavInvoce[] => {
  if (!content || typeof content !== 'object' || !('szamlak' in content)) return [];

  const { szamlak } = content;

  if (!szamlak || typeof szamlak !== 'object' || !('szamla' in szamlak)) return [];

  const { szamla } = szamlak;

  if (!Array.isArray(szamla)) return [];

  return szamla
    .filter((invoice: NavInvoce) => includeOnlyTypes.includes(invoice.fejlec.szlatipus))
    .map((invoice: NavInvoce) => {
      if (invoice.nem_kotelezo.penznem === 'HUF') {
        return {
          ...invoice,
          exchangeRate: new BigNumber(1),
        };
      }

      const rateDate = min([
        parse(invoice.fejlec.szladatum, 'yyyy-mm-dd', new Date()),
        parse(invoice.fejlec.teljdatum, 'yyyy-mm-dd', new Date()),
      ]);

      const exchangeRate = getRate(rateDate, invoice.nem_kotelezo.penznem);

      return {
        ...invoice,
        exchangeRate,
      };
    });
};

export const getPartnerReference = (invoice: NavInvoce) => {
  if (!invoice.vevo.adoszam && invoice.vevo.kozadoszam) {
    return invoice.vevo.kozadoszam;
  }

  return `${
    invoice.vevo.adoszam ? invoice.vevo.adoszam.toString().substring(0, 8) : invoice.vevo.cim.iranyitoszam.toString() + invoice.vevo.nev
  }`.substring(0, 19);
};
