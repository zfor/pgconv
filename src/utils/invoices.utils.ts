import { InvoiceType, NavInvoce, invoiceType } from '../partners/partners.type';

export const extractInvoiceListFromNavXML = (content: unknown, includeOnlyTypes: InvoiceType[] = [invoiceType.normal]): NavInvoce[] => {
  if (!content || typeof content !== 'object' || !('szamlak' in content)) return [];

  const { szamlak } = content;

  if (!szamlak || typeof szamlak !== 'object' || !('szamla' in szamlak)) return [];

  const { szamla } = szamlak;

  if (!Array.isArray(szamla)) return [];

  return szamla.filter((invoice: NavInvoce) => includeOnlyTypes.includes(invoice.fejlec.szlatipus));
};
