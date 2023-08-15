import { NavInvoce, Partner } from '../partners/partners.type';

export const extractUniquePartnerListFromNavXML = (content: unknown): Partner[] => {
  if (!content || typeof content !== 'object' || !('szamlak' in content)) return [];

  const { szamlak } = content;

  if (!szamlak || typeof szamlak !== 'object' || !('szamla' in szamlak)) return [];

  const { szamla } = szamlak;

  if (!Array.isArray(szamla)) return [];

  return szamla.map(({ vevo }: NavInvoce) => vevo);
};
