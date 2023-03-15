import { program } from "commander";
import { extractPartners } from "./partners/partners";

program
  .command("partners")
  .description("convert partner data")
  .argument("<input-file>")
  .action((...args: any[]) => extractPartners(args[0]));

program.parse();
