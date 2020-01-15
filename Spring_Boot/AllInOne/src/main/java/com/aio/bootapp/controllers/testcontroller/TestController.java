package com.aio.bootapp.controllers.testcontroller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aio.bootapp.service.testservice.TestService;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("api")
//@Profile("dev")
@Api(value = "Test", description = "Testing Controller",consumes="application/text",basePath = "/api",position = 1) // Swagger annotation
public class TestController {

	
	private static final Logger log = LoggerFactory.getLogger(TestController.class);

	
	@Autowired
	private TestService testService;
	
	@GetMapping("Hii")
	public String getTest() {
		log.info("Hello from Log start");
		return testService.TestService();
	}
}
