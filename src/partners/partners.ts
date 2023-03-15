import { readFileSync } from "fs";
import { XMLParser } from "fast-xml-parser";

export const extractPartners = (inputFilePath: string) => {
  const xmlSource = readFileSync(inputFilePath, { encoding: "utf-8" });
  //const parser = new XMLParser();
  console.log(xmlSource);
};
