import { readFileSync } from "fs";
import { XMLParser } from "fast-xml-parser";
import { hideSpinner, showSpinner } from "../utils/spinner.util";
import { readFile, writeFile } from "fs/promises";
import exceljs from "exceljs";
import { format, join, parse, resolve } from "path";
import logUpdate from "log-update";

const parser = new XMLParser({
  htmlEntities: true,
  trimValues: true,
});

type Partner = {
  nev: string;
  adoszam?: string;
  cim: {
    iranyitoszam: string;
    telepules: string;
    kozterulet_neve: string;
    kozterulet_jellege?: string;
    hazszam?: string;
  };
};

export const extractPartners = async (inputFilePath: string) => {
  console.time("Output generated in:");
  showSpinner("Processing XML file");
  const xmlSource = await readFile(inputFilePath, { encoding: "utf-8" });

  const content = parser.parse(xmlSource);
  const workbook = new exceljs.Workbook();

  workbook.creator = "pgconv";

  const sheet = workbook.addWorksheet("PartnerTorzs");

  sheet.columns = [
    { header: "vevo-0", key: "vevo-0", width: 10 },
    { header: "Iktatószám", key: "key", width: 32 },
    { header: "Vevő neve", key: "name", width: 32 },
    { header: "", key: "empty1", width: 2 },
    { header: "", key: "mainGroup", width: 18 },
    { header: "", key: "secondaryGroup", width: 2 },
    { header: "Irányítószám", key: "postalCode", width: 10 },
    { header: "Település", key: "city", width: 14 },
    { header: "Közterület neve", key: "street", width: 14 },
    { header: "Ország", key: "country", width: 14 },
    { header: "", key: "empty2", width: 2 },
    { header: "", key: "empty3", width: 2 },

    { header: "Irányítószám", key: "postalCode1", width: 10 },
    { header: "Település", key: "city1", width: 14 },
    { header: "Közterület neve", key: "street1", width: 14 },
    { header: "Ország", key: "country1", width: 14 },

    { header: "", key: "empty4", width: 2 },
    { header: "", key: "empty5", width: 2 },
    { header: "", key: "empty6", width: 2 },
    { header: "", key: "empty7", width: 2 },
    { header: "", key: "empty8", width: 2 },
    { header: "", key: "empty9", width: 2 },
    { header: "", key: "empty10", width: 2 },
    { header: "", key: "empty11", width: 2 },

    { header: "", key: "cashOnly", width: 6 },

    { header: "", key: "empty12", width: 2 },
    { header: "", key: "empty13", width: 2 },
    { header: "", key: "empty14", width: 2 },

    { header: "Adószám", key: "taxNumber", width: 18 },

    { header: "", key: "empty14", width: 2 },
    { header: "", key: "empty15", width: 2 },
    { header: "", key: "empty16", width: 2 },
    { header: "", key: "empty17", width: 2 },
    { header: "", key: "empty18", width: 2 },
    { header: "", key: "empty19", width: 2 },
    { header: "", key: "empty20", width: 2 },
    { header: "", key: "empty21", width: 2 },
    { header: "", key: "empty22", width: 2 },
    { header: "", key: "empty23", width: 2 },
    { header: "", key: "empty24", width: 2 },
    { header: "", key: "empty25", width: 2 },

    { header: "Mozgásirány", key: "direction", width: 4 },

    { header: "", key: "empty25", width: 2 },
    { header: "", key: "empty26", width: 2 },
    { header: "", key: "empty27", width: 2 },
    { header: "", key: "empty28", width: 2 },
    { header: "", key: "empty29", width: 2 },
    { header: "", key: "empty30", width: 2 },
    { header: "", key: "empty31", width: 2 },
    { header: "", key: "empty32", width: 2 },
    { header: "", key: "empty33", width: 2 },
    { header: "", key: "empty34", width: 2 },
    { header: "", key: "empty35", width: 2 },
    { header: "", key: "empty36", width: 2 },
    { header: "", key: "empty37", width: 2 },
    { header: "", key: "empty38", width: 2 },
    { header: "", key: "empty39", width: 2 },
    { header: "", key: "empty40", width: 2 },

    { header: "Közterület neve", key: "street2", width: 14 },
    { header: "Közterület jellege", key: "streetType", width: 14 },
    { header: "Házszám", key: "address", width: 14 },

    { header: "", key: "empty41", width: 2 },
    { header: "", key: "empty42", width: 2 },
    { header: "", key: "empty43", width: 2 },
    { header: "", key: "empty44", width: 2 },
    { header: "", key: "empty45", width: 2 },

    { header: "Közterület neve", key: "street3", width: 14 },
    { header: "Közterület jellege", key: "streetType1", width: 14 },
    { header: "Házszám", key: "address1", width: 14 },

    { header: "", key: "empty46", width: 2 },
    { header: "", key: "empty47", width: 2 },
    { header: "", key: "empty48", width: 2 },
    { header: "", key: "empty49", width: 2 },
    { header: "", key: "empty50", width: 2 },
    { header: "", key: "empty51", width: 2 },

    { header: "Ügyviteli kategória", key: "category", width: 2 },
  ];

  content.szamlak.szamla.forEach(({ vevo }: { vevo: Partner }) => {
    const key = `${
      vevo.adoszam ? vevo.adoszam : vevo.cim.iranyitoszam.toString() + vevo.nev
    }`.substring(0, 19);

    sheet.addRow({
      "vevo-0": "0",
      key,
      name: vevo.nev,
      mainGroup: "Vevő főcsoport",
      secondaryGroup: "-",
      postalCode: vevo.cim.iranyitoszam,
      postalCode1: vevo.cim.iranyitoszam,
      city: vevo.cim.telepules,
      city1: vevo.cim.telepules,
      street: vevo.cim.kozterulet_neve,
      street1: vevo.cim.kozterulet_neve,
      street2: vevo.cim.kozterulet_neve,
      street3: vevo.cim.kozterulet_neve,
      country: "Magyarország",
      country1: "Magyarország",
      cashOnly: "NEM",
      taxNumber: vevo.adoszam ?? "",
      direction: 0,
      streetType: vevo.cim.kozterulet_jellege ?? "-",
      streetType1: vevo.cim.kozterulet_jellege ?? "-",
      address: vevo.cim.hazszam?.toString() ?? "-",
      address1: vevo.cim.hazszam?.toString() ?? "-",
      category: vevo.adoszam ? "1" : "3",
    });
  });

  const absolutePath = resolve(inputFilePath);
  const parsedPath = parse(absolutePath);

  const outFileName = `${parse(inputFilePath).name}.xlsx`;
  const outFilePath = format({ ...parsedPath, ext: "xlsx", base: outFileName });

  await workbook.xlsx.writeFile(outFilePath);
  hideSpinner();
  logUpdate(`XLSX File generated successfully!`);
  console.log("Location:", outFilePath);
  console.timeEnd("Output generated in:");
};
