package com.aio.bootapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AllInOneApplication {

	/**
	 * 
	 * @param args
	 */
	public static void main(String[] args) {
		SpringApplication.run(AllInOneApplication.class, args);
		OpenSwagger();
	}
	
	
	/**
	 * @author Vinayak
	 * @return void 
	 */
	private static void OpenSwagger() {
		try {
			Runtime rt = Runtime.getRuntime();
			rt.exec("rundll32 url.dll,FileProtocolHandler " + "http://localhost:5959/AllInOne/swagger-ui.html#/");
		} catch (Exception e) {
			e.printStackTrace();
		}

	}
}
