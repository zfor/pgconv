#! /usr/bin/env node

import { Command } from 'commander';
import figlet from 'figlet';
import { partnerAction } from './partners/partners';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('../package.json');
import { InvoiceCommandOptions } from './invoices/invoices.type';
import { PartnerCommandOptions } from './partners/partners.type';
import { invoicesAction } from './invoices/invoices';

console.log(figlet.textSync('pgconv'));
console.log('');

const program = new Command();

program.version(packageJson.version);

program
  .command('partners')
  .description('convert partner data')
  .option('-f|--format [output-format]', 'Specify output format', 'deep')
  .argument('<input-file>')
  .action((inputFile: string, options: PartnerCommandOptions) => partnerAction(inputFile, options));

program
  .command('invoices')
  .description('convert invoce data')
  .option('-c|--count [max-invoices-per-file]', 'Specify the max number of invoices that can be added to an export file', '200')
  .option('-a|--account-number [account-number]', '', '')
  .argument('<input-file>')
  .action(console.log)
  .action((inputFile: string, options: InvoiceCommandOptions) => invoicesAction(inputFile, options));

program.parse(process.argv);
