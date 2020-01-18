//package com.aio.bootapp.sampleTest;
//
//import java.util.HashMap;
//import java.util.concurrent.TimeUnit;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
//
//public class SeleniumTest {
//
//	WebDriver driver = null;
//	static HashMap<String, String> inputParam = new HashMap<String, String>();
//
//	public static void main(String[] args) {
//		
//		new SeleniumTest().goSequence();
//		             
//
//		      
//	}
//
//	private void initialize() {
//		
//		System.setProperty("webdriver.chrome.driver", "C:\\Users\\fwin02096\\Downloads\\chromedriver_win32 (1)\\chromedriver.exe");
//
////            System.setProperty("webdriver.chrome.driver", "..\\chromedriver.exe");
//
//driver=new ChromeDriver();
//
////
//
//driver.manage().timeouts().implicitlyWait(10,
//TimeUnit.SECONDS);
//		             
//		//maximize window
//		             
//		driver.manage().window().maximize();
//		 
//		             
//		//open browser with desried URL
//		             
//		driver.get("https://www.google.com");
//		      
//	}       
//
//	private void closeBrowser() {
//		             
//		//closing the browser
//		             
//		driver.close();
//		      
//	}       
//
//	private void getParamaterListfromExcel() {
//		             
//		inputParam.put("login", "vinyak");
//		      
//	}      
//
//	      
//
//	private void goSequence() {
//		             
//		getParamaterListfromExcel();
//		             
//		initialize();
//		//           
//		closeBrowser();
//		      
//	}
//}     
//
////https://selenium-release.storage.googleapis.com/3.141/selenium-java-3.141.59.zip