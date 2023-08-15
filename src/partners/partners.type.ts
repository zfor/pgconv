export type PartnerOutputFormat = 'deep' | 'ipp';

export type PartnerCommandOptions = {
  readonly format: PartnerOutputFormat;
};

export type Partner = {
  nev: string;
  adoszam?: string;
  cim: NavInvoiceAddress;
};

export type NavInvoiceHeader = {
  szlasorszam: string;
  szlatipus: InvoiceType;
  szladatum: string;
  teljdatum: string;
};

export type NavInvoiceTotals = {
  afarovat: { nettoar: number; adokulcs: number; adoertek: number; bruttoar: number };
  vegosszeg: { nettoarossz: number; afaertekossz: number; bruttoarossz: number };
};

export type NavInvoiceAddress = {
  iranyitoszam: number;
  telepules: string;
  kozterulet_neve: string;
  kozterulet_jellege: string;
  hazszam?: number | string;
  szint: string | number;
  ajto: number | string;
};

export type NavInvoiceLine = {
  termeknev: string;
  besorszam: string;
  menny: number;
  mertekegys: 'db' | string;
  kozv_szolgaltatas: boolean;
  nettoar: number;
  nettoegysar: number;
  dohany_ar: number;
  adokulcs: number | 'ÁKK';
  adoertek: number;
  bruttoar: number;
};

export type ExtendedNavInvoice = {
  fejlec: NavInvoiceHeader;
  szamlakibocsato: {
    adoszam: string;
    kozadoszam: number;
    kisadozo: boolean;
    nev: string;
    cim: NavInvoiceAddress;
    egyeni_vallalkozo: false;
  };
  vevo: Partner;
  termek_szolgaltatas_tetelek: NavInvoiceLine[];
  modosito_szla?: {
    eredeti_sorszam: string;
  };
  zaradekok: {
    penzforgelsz: boolean;
    onszamla: boolean;
    ford_ado: boolean;
    adoment_hiv: boolean;
  };
  nem_kotelezo: {
    fiz_hatarido: string;
    fiz_mod: 'Átutalás' | string;
    penznem: 'HUF' | 'EUR' | 'GBP' | string;
    szla_forma: boolean;
  };
  osszesites: NavInvoiceTotals;
};

export type NavInvoce = {
  fejlec: NavInvoiceHeader;
  szamlakibocsato: {
    adoszam: string;
    kozadoszam: number;
    kisadozo: boolean;
    nev: string;
    cim: NavInvoiceAddress;
    egyeni_vallalkozo: false;
  };
  vevo: Partner;
  termek_szolgaltatas_tetelek: NavInvoiceLine[] | NavInvoiceLine;
  modosito_szla?: {
    eredeti_sorszam: string;
  };
  zaradekok: {
    penzforgelsz: boolean;
    onszamla: boolean;
    ford_ado: boolean;
    adoment_hiv: boolean;
  };
  nem_kotelezo: {
    fiz_hatarido: string;
    fiz_mod: 'Átutalás' | string;
    penznem: 'HUF' | 'EUR' | 'GBP' | string;
    szla_forma: boolean;
  };
  osszesites: NavInvoiceTotals;
};

export const invoiceType = {
  normal: 1,
  storno: 4,
} as const;

export type InvoiceType = (typeof invoiceType)[keyof typeof invoiceType];
