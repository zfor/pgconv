import exceljs from 'exceljs';

export const createWorkbook = () => {
  const workbook = new exceljs.Workbook();
  workbook.creator = 'pgconv';
  workbook.company = 'PerfectGroup Könyvelőiroda';

  return workbook;
};

export const emptyColumns = (columns: number): readonly string[] => new Array(columns).map(() => '');