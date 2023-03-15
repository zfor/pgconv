import { program } from "commander";
import { extractPartners } from "./partners/partners";

program
  .command("partners")
  .argument("<input-file>")
  .action((...args: any[]) => extractPartners(args[0]));

program.parse();
