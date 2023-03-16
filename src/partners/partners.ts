import { readFileSync } from "fs";
import { XMLParser } from "fast-xml-parser";
import { hideSpinner, showSpinner } from "../utils/spinner.util";

export const extractPartners = async (inputFilePath: string) => {
  const xmlSource = readFileSync(inputFilePath, { encoding: "utf-8" });
  //const parser = new XMLParser();
  showSpinner("Exctracting partner list");

  await sleep(5000);
  hideSpinner();

  showSpinner("Exctracting partner list 2");

  await sleep(5000);
  hideSpinner();

  console.log(xmlSource);
};

const sleep = async (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));
