import { z } from 'zod';

const supportedCurrencySchema = z.enum(['HUF', 'EUR', 'USD', 'GBP']);

export type SupportedCurrency = z.infer<typeof supportedCurrencySchema>;