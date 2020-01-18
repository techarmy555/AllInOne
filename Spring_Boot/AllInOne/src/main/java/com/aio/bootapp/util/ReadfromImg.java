package com.aio.bootapp.util;

import java.io.File;
import java.io.IOException;

import net.sourceforge.tess4j.ITesseract;
import net.sourceforge.tess4j.Tesseract;
import net.sourceforge.tess4j.TesseractException;

public class ReadfromImg {
	public String getImgText(String imageLocation) throws IOException {
		ITesseract instance = new Tesseract();
		File projectBasePath=new File("");
		System.out.println(projectBasePath.getCanonicalPath());
		instance.setDatapath(projectBasePath.getCanonicalPath()+"/tessdata");
		instance.setLanguage("eng");
		try
		{
			String imgText = instance.doOCR(new File(imageLocation));
			return imgText;
		}catch (TesseractException e){
		return "Error while reading image";
		}
		
	}
	public static void main(String[] args) throws IOException {
		ReadfromImg app =new ReadfromImg();
		System.out.println(app.getImgText("E:\\Aniket Docs\\Applications\\Paragraph-key-topics-1-AEUK.png"));
	}
}
