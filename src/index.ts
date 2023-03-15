import { program } from "commander";
import { extractPartners } from "./partners/partners";

program.command("partners").action(() => extractPartners());

program.parse();
