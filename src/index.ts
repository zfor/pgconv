import { program } from "commander";

program.command("asd").action(() => console.log("asd"));

program.parse();
