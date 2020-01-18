package com.aio.bootapp.util;

import java.io.InputStream;
import java.util.Iterator;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ReadfromExcel {

	@SuppressWarnings("static-access")

	public XSSFWorkbook getSheetInstance() {

		XSSFWorkbook wb = null;

		try {

			InputStream ExcelFileToRead = ClassLoader.getSystemClassLoader()
					.getSystemResourceAsStream("11DEquipmentDataSheet.xlsx");

			wb = new XSSFWorkbook(ExcelFileToRead);

		}

		catch (Exception e) {

			e.printStackTrace();

		}

		return wb;

	}

	private void Accessmethod1() {

		XSSFWorkbook wb = new ReadfromExcel().getSheetInstance();

		String ExcelString = wb.getSheetAt(1).getRow(0).getCell(0).toString().trim();

		System.out.println("ExcelString :::" + ExcelString);

	}

	private void Accessmethod2() {

		XSSFWorkbook wb = new ReadfromExcel().getSheetInstance();

		for (int sheetNo = 0; sheetNo <= wb.getNumberOfSheets() - 1; sheetNo++) {

			XSSFSheet sheet = wb.getSheetAt(sheetNo);

//Iterate through each rows one by one

			Iterator<Row> rowIterator = sheet.iterator();

			while (rowIterator.hasNext())

			{

				Row row = rowIterator.next();

//For each row, iterate through all the columns

				Iterator<Cell> cellIterator = row.cellIterator();

				while (cellIterator.hasNext())

				{

					Cell cell = cellIterator.next();
					System.out.println(cell.getStringCellValue());
					if (sheetNo == 0) {

					} else if (sheetNo == 1) {

					} else if (sheetNo == 2) {

					} else if (sheetNo == 3) {

					} else {

					}

				}

			}

		}

	}

	public static void main(String[] args) {

		ReadfromExcel red = new ReadfromExcel();

		XSSFWorkbook wb = red.getSheetInstance();

		red.Accessmethod2();

	}
}