import { TableColumnProperties } from 'exceljs';

export const invoiceTableColumns: readonly TableColumnProperties[] = [
  { name: 'Sorszám' },
  { name: 'Iktatószám' },
  { name: 'Pénzügyi számla típus' },
  { name: 'Partner' },
  { name: 'Stornózott számla száma' },
  { name: 'Partner bankszámlaszám' },
  { name: 'Partner telephely' },
  { name: 'Általános ügyviteli kategória' },
  { name: 'Számlaszám' },
  { name: 'Fő összeg típus' },
  { name: 'Sor összeg típus' },
  { name: 'Külső iktatószám' },
  { name: 'Fizetési mód' },
  { name: 'Projekt' },
  { name: 'Pénzforgalmi áfa' },
  { name: 'Kiállítás dátuma' },
  { name: 'KATA (adó)' },
  { name: 'Teljesítés dátuma' },
  { name: 'Fizetési határidő' },
  { name: 'Áfa dátum' },
  { name: 'Számviteli dátum' },
  { name: 'Pénzügyi státusz' },
  { name: 'Devizanem' },
  { name: 'Árfolyam' },
  { name: 'Főösszeg' },
  { name: 'Főösszeg (KD)' },
  { name: 'Fizető partner' },
  { name: 'Megjegyzés' },
  { name: 'Tárgy' },
  { name: 'Könyvelési státusz' },
  { name: 'Késedelmi kamat számítás' },
  { name: 'Állapot' },
  { name: 'Késedelmi kamat típus' },
  { name: 'Partneri árfolyam' },
  { name: 'Jelentési árfolyam' },
  { name: 'Utalványozó felhasználó' },
  { name: 'Külső rendszer azonosítója' },
  { name: 'Külső rendszer fő tétel hivatkozás' },
  { name: 'Külső rendszer altétel hivatkozás' },
  { name: 'Pénzeszköz' },
  { name: 'Csoportos e-bank utalásból kizárt' },
  { name: 'Sor dimenzió.Sor dimenzió 01' },
  { name: 'Sor dimenzió.Sor dimenzió 02' },
  { name: 'Sor dimenzió.Sor dimenzió 03' },
  { name: 'Sor dimenzió.Sor dimenzió 04' },
  { name: 'Sor dimenzió.Sor dimenzió 05' },
  { name: 'Sor dimenzió.Sor dimenzió 06' },
  { name: 'Sor dimenzió.Sor dimenzió 07' },
  { name: 'Sor dimenzió.Sor dimenzió 08' },
  { name: 'Sor dimenzió.Sor dimenzió 09' },
  { name: 'Sor dimenzió.Sor dimenzió 10' },
  { name: 'Fej dimenzió.Fej dimenzió 01' },
  { name: 'Fej dimenzió.Fej dimenzió 02' },
  { name: 'Fej dimenzió.Fej dimenzió 03' },
  { name: 'Fej dimenzió.Fej dimenzió 04' },
  { name: 'Fej dimenzió.Fej dimenzió 05' },
  { name: 'Fej dimenzió.Fej dimenzió 06' },
  { name: 'Fej dimenzió.Fej dimenzió 07' },
  { name: 'Fej dimenzió.Fej dimenzió 08' },
  { name: 'Fej dimenzió.Fej dimenzió 09' },
  { name: 'Fej dimenzió.Fej dimenzió 10' },
  { name: 'Fej extra.Szöveg 1' },
  { name: 'Fej extra.Szöveg 2' },
  { name: 'Fej extra.Szöveg 3' },
  { name: 'Fej extra.Szöveg 4' },
  { name: 'Fej extra.Szöveg 5' },
  { name: 'Fej extra.Szöveg 6' },
  { name: 'Fej extra.Szöveg 7' },
  { name: 'Fej extra.Szöveg 8' },
  { name: 'Fej extra.Szöveg 9' },
  { name: 'Fej extra.Szöveg 10' },
  { name: 'Fej extra.Szám 1' },
  { name: 'Fej extra.Szám 2' },
  { name: 'Fej extra.Szám 3' },
  { name: 'Fej extra.Szám 4' },
  { name: 'Fej extra.Szám 5' },
  { name: 'Fej extra.Szám 6' },
  { name: 'Fej extra.Szám 7' },
  { name: 'Fej extra.Szám 8' },
  { name: 'Fej extra.Szám 9' },
  { name: 'Fej extra.Szám 10' },
  { name: 'Fej extra.Dátum 1' },
  { name: 'Fej extra.Dátum 2' },
  { name: 'Fej extra.Dátum 3' },
  { name: 'Fej extra.Dátum 4' },
  { name: 'Fej extra.Dátum 5' },
  { name: 'Fej extra.Dátum 6' },
  { name: 'Fej extra.Dátum 7' },
  { name: 'Fej extra.Dátum 8' },
  { name: 'Fej extra.Dátum 9' },
  { name: 'Fej extra.Dátum 10' },
  { name: 'Fej extra.Logikai 1' },
  { name: 'Fej extra.Logikai 2' },
  { name: 'Fej extra.Logikai 3' },
  { name: 'Fej extra.Logikai 4' },
  { name: 'Fej extra.Logikai 5' },
  { name: 'Fej extra.Logikai 6' },
  { name: 'Fej extra.Logikai 7' },
  { name: 'Fej extra.Logikai 8' },
  { name: 'Fej extra.Logikai 9' },
  { name: 'Fej extra.Logikai 10' },
  { name: 'Törölt' },
  { name: 'Skontó típus' },
  { name: 'Skontó dátum' },
  { name: 'Skontó összeg' },
  { name: 'Jóváhagyás típus' },
  { name: 'Jóváhagyás kötelező' },
  { name: 'Jóváhagyandó' },
  { name: 'POS tranzakció ID' },
  { name: 'Könyvelés' },
  { name: 'Jóváhagyás státusz' },
  { name: 'Jóváhagyás/elutasítás dátum' },
];

export const invoiceTableActions = [
  '',
  'Nincs',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Nincs',
  'Létrehozás és firssítés',
  'Nincs',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Nincs',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Nincs',
  'Létrehozás és firssítés',
  'Létrehozás',
  'Létrehozás',
  'Nincs',
  'Nincs',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Nincs',
  'Nincs',
] as const;

export const invoiceTableFields = [
  'DataIndex',
  'ReferenceNumber',
  'FinancialInvoiceType',
  'Partner',
  'StornoSourceInvoiceNumber',
  'PartnerBankAccount',
  'PartnerSite',
  'AccountingBusinessCategory',
  'InvoiceNumber',
  'SumAmountInitialType',
  'AmountInitialType',
  'ExternalReferenceNumber',
  'PaymentMethod',
  'Project',
  'IsPaymentVAT',
  'CreationDate',
  'IsKATA',
  'TransactionDate',
  'DueDate',
  'VATDate',
  'AccountingDate',
  'FinancialStatus',
  'ForeignCurrency',
  'ForeignCurrencyRate',
  'SumAmountForeign',
  'SumAmountAccounting',
  'PayorPartner',
  'Description',
  'Name',
  'PostingStatus',
  'IsFinanceChargeCalculation',
  'Status',
  'FinancialChargeType',
  'PartnerForeignCurrencyRate',
  'ReportingCurrencyRate',
  'RemitterUser',
  'ExternalSystemID',
  'ExternalSystemMainItemReference',
  'ExternalSystemSubItemReference',
  'FinancialAccount',
  'IsExcludedFromEBankGroupTransfer',
  'RowDimension.Dimension1',
  'RowDimension.Dimension2',
  'RowDimension.Dimension3',
  'RowDimension.Dimension4',
  'RowDimension.Dimension5',
  'RowDimension.Dimension6',
  'RowDimension.Dimension7',
  'RowDimension.Dimension8',
  'RowDimension.Dimension9',
  'RowDimension.Dimension10',
  'HeadDimension.Dimension1',
  'HeadDimension.Dimension2',
  'HeadDimension.Dimension3',
  'HeadDimension.Dimension4',
  'HeadDimension.Dimension5',
  'HeadDimension.Dimension6',
  'HeadDimension.Dimension7',
  'HeadDimension.Dimension8',
  'HeadDimension.Dimension9',
  'HeadDimension.Dimension10',
  'HeadExtra.String1',
  'HeadExtra.String2',
  'HeadExtra.String3',
  'HeadExtra.String4',
  'HeadExtra.String5',
  'HeadExtra.String6',
  'HeadExtra.String7',
  'HeadExtra.String8',
  'HeadExtra.String9',
  'HeadExtra.String10',
  'HeadExtra.Number1',
  'HeadExtra.Number2',
  'HeadExtra.Number3',
  'HeadExtra.Number4',
  'HeadExtra.Number5',
  'HeadExtra.Number6',
  'HeadExtra.Number7',
  'HeadExtra.Number8',
  'HeadExtra.Number9',
  'HeadExtra.Number10',
  'HeadExtra.Date1',
  'HeadExtra.Date2',
  'HeadExtra.Date3',
  'HeadExtra.Date4',
  'HeadExtra.Date5',
  'HeadExtra.Date6',
  'HeadExtra.Date7',
  'HeadExtra.Date8',
  'HeadExtra.Date9',
  'HeadExtra.Date10',
  'HeadExtra.Bool1',
  'HeadExtra.Bool2',
  'HeadExtra.Bool3',
  'HeadExtra.Bool4',
  'HeadExtra.Bool5',
  'HeadExtra.Bool6',
  'HeadExtra.Bool7',
  'HeadExtra.Bool8',
  'HeadExtra.Bool9',
  'HeadExtra.Bool10',
  'IsDeletedRecord',
  'ScontoType',
  'ScontoDate',
  'ScontoAmountForeign',
  'ApprovalType',
  'IsApprovalSettingRequired',
  'IsApprovalRequired',
  'POSTransactionID',
  'ImmediatePost',
  'ApprovalStatus',
  'ApprovedDate',
] as const;

export const invoiceLineTableColumns: readonly TableColumnProperties[] = [
  { name: 'Szülő sorszám' },
  { name: 'Pénzügyi számla.Számlaszám' },
  { name: 'Pénzügyi számla.Pénzügyi számla típus' },
  { name: 'Pénzügyi számla.Partner' },
  { name: 'Főkönyvi számlaszám forrás' },
  { name: 'Devizanem' },
  { name: 'Főkönyvi számlaszám' },
  { name: 'Főkönyvi jogcím' },
  { name: 'Árfolyam' },
  { name: 'Áfa kód' },
  { name: 'Áfa típus' },
  { name: 'Megjegyzés' },
  { name: 'Egyedi áfa' },
  { name: 'Pénzforgalmi áfa' },
  { name: 'Áfa főkönyvi számlaszám' },
  { name: 'Összeg' },
  { name: 'Összeg (KD)' },
  { name: 'Nettó összeg' },
  { name: 'Nettó összeg (KD)' },
  { name: 'Áfa összeg' },
  { name: 'Áfa összeg (KD)' },
  { name: 'Partneri árfolyam' },
  { name: 'Partneri áfa (KD)' },
  { name: 'Felosztható készlet költség' },
  { name: 'Elhatárolás' },
  { name: 'Elhatárolás típus' },
  { name: 'Elhatárolás kezdete' },
  { name: 'Elhatárolás tételek' },
  { name: 'Külső rendszer azonosítója' },
  { name: 'Külső rendszer fő tétel hivatkozás' },
  { name: 'Külső rendszer altétel hivatkozás' },
  { name: 'Sor dimenzió.Sor dimenzió 01' },
  { name: 'Sor dimenzió.Sor dimenzió 02' },
  { name: 'Sor dimenzió.Sor dimenzió 03' },
  { name: 'Sor dimenzió.Sor dimenzió 04' },
  { name: 'Sor dimenzió.Sor dimenzió 05' },
  { name: 'Sor dimenzió.Sor dimenzió 06' },
  { name: 'Sor dimenzió.Sor dimenzió 07' },
  { name: 'Sor dimenzió.Sor dimenzió 08' },
  { name: 'Sor dimenzió.Sor dimenzió 09' },
  { name: 'Sor dimenzió.Sor dimenzió 10' },
  { name: 'Sor extra.Szöveg 1' },
  { name: 'Sor extra.Szöveg 2' },
  { name: 'Sor extra.Szöveg 3' },
  { name: 'Sor extra.Szöveg 4' },
  { name: 'Sor extra.Szöveg 5' },
  { name: 'Sor extra.Szöveg 6' },
  { name: 'Sor extra.Szöveg 7' },
  { name: 'Sor extra.Szöveg 8' },
  { name: 'Sor extra.Szöveg 9' },
  { name: 'Sor extra.Szöveg 10' },
  { name: 'Sor extra.Szám 1' },
  { name: 'Sor extra.Szám 2' },
  { name: 'Sor extra.Szám 3' },
  { name: 'Sor extra.Szám 4' },
  { name: 'Sor extra.Szám 5' },
  { name: 'Sor extra.Szám 6' },
  { name: 'Sor extra.Szám 7' },
  { name: 'Sor extra.Szám 8' },
  { name: 'Sor extra.Szám 9' },
  { name: 'Sor extra.Szám 10' },
  { name: 'Sor extra.Dátum 1' },
  { name: 'Sor extra.Dátum 2' },
  { name: 'Sor extra.Dátum 3' },
  { name: 'Sor extra.Dátum 4' },
  { name: 'Sor extra.Dátum 5' },
  { name: 'Sor extra.Dátum 6' },
  { name: 'Sor extra.Dátum 7' },
  { name: 'Sor extra.Dátum 8' },
  { name: 'Sor extra.Dátum 9' },
  { name: 'Sor extra.Dátum 10' },
  { name: 'Sor extra.Logikai 1' },
  { name: 'Sor extra.Logikai 2' },
  { name: 'Sor extra.Logikai 3' },
  { name: 'Sor extra.Logikai 4' },
  { name: 'Sor extra.Logikai 5' },
  { name: 'Sor extra.Logikai 6' },
  { name: 'Sor extra.Logikai 7' },
  { name: 'Sor extra.Logikai 8' },
  { name: 'Sor extra.Logikai 9' },
  { name: 'Sor extra.Logikai 10' },
];

export const invoiceLineTableActions = [
  '',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás',
  'Létrehozás',
  'Létrehozás',
  'Létrehozás',
  'Létrehozás',
  'Létrehozás',
  'Létrehozás',
  'Létrehozás',
  'Létrehozás',
  'Létrehozás',
  'Nincs',
  'Létrehozás',
  'Létrehozás',
  'Létrehozás',
  'Létrehozás',
  'Létrehozás',
  'Létrehozás',
  'Létrehozás',
  'Létrehozás',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás',
  'Létrehozás',
  'Létrehozás',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
  'Létrehozás és firssítés',
] as const;

export const invoiceLineTableFields = [
  'DataIndex',
  'FinancialInvoice.InvoiceNumber',
  'FinancialInvoice.FinancialInvoiceType',
  'FinancialInvoice.Partner',
  'AccountingSource',
  'ForeignCurrency',
  'AccountingGLNumber',
  'AccountingCode',
  'ForeignCurrencyRate',
  'AccountingVAT',
  'VATType',
  'Description',
  'IsManualVATAmount',
  'IsPaymentVAT',
  'VATAccountingGLNumber',
  'AmountForeign',
  'AmountAccounting',
  'NetAmountForeign',
  'NetAmountAccounting',
  'VATAmountForeign',
  'VATAmountAccounting',
  'PartnerForeignCurrencyRate',
  'VATPartnerAmountAccounting',
  'IsDistributableStockCost',
  'IsAccrual',
  'AccrualType',
  'AccrualStartDate',
  'ManualAccrualDetail',
  'ExternalSystemID',
  'ExternalSystemMainItemReference',
  'ExternalSystemSubItemReference',
  'RowDimension.Dimension1',
  'RowDimension.Dimension2',
  'RowDimension.Dimension3',
  'RowDimension.Dimension4',
  'RowDimension.Dimension5',
  'RowDimension.Dimension6',
  'RowDimension.Dimension7',
  'RowDimension.Dimension8',
  'RowDimension.Dimension9',
  'RowDimension.Dimension10',
  'RowExtra.String1',
  'RowExtra.String2',
  'RowExtra.String3',
  'RowExtra.String4',
  'RowExtra.String5',
  'RowExtra.String6',
  'RowExtra.String7',
  'RowExtra.String8',
  'RowExtra.String9',
  'RowExtra.String10',
  'RowExtra.Number1',
  'RowExtra.Number2',
  'RowExtra.Number3',
  'RowExtra.Number4',
  'RowExtra.Number5',
  'RowExtra.Number6',
  'RowExtra.Number7',
  'RowExtra.Number8',
  'RowExtra.Number9',
  'RowExtra.Number10',
  'RowExtra.Date1',
  'RowExtra.Date2',
  'RowExtra.Date3',
  'RowExtra.Date4',
  'RowExtra.Date5',
  'RowExtra.Date6',
  'RowExtra.Date7',
  'RowExtra.Date8',
  'RowExtra.Date9',
  'RowExtra.Date10',
  'RowExtra.Bool1',
  'RowExtra.Bool2',
  'RowExtra.Bool3',
  'RowExtra.Bool4',
  'RowExtra.Bool5',
  'RowExtra.Bool6',
  'RowExtra.Bool7',
  'RowExtra.Bool8',
  'RowExtra.Bool9',
  'RowExtra.Bool10',
] as const;