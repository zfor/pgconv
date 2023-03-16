#! /usr/bin/env node

import { Command } from "commander";
import figlet from "figlet";
import { extractPartners } from "./partners/partners";
const packageJson = require("../package.json");

console.log(figlet.textSync("pgconv"));
console.log("");

const program = new Command();

program.version(packageJson.version);

program
  .command("partners")
  .description("convert partner data")
  .argument("<input-file>")
  .action((...args: any[]) => extractPartners(args[0]));

program.parse(process.argv);
