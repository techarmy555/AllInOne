package com.aio.bootapp.sampleTest;

import static org.junit.Assert.assertEquals;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.aio.bootapp.controllers.testcontroller.TestController;
import com.aio.bootapp.service.testservice.TestService;


@RunWith(SpringRunner.class)
@WebMvcTest(value=TestController.class)
class AllInOneApplicationTests {

	@MockBean
	public TestService service;
	
	@Autowired
	public MockMvc mockMvc;
	
	@Test
	public void testServiceTest() throws Exception {
		Mockito.when(
				service.TestService()
				).thenReturn("Hello From Test Service");
		
		RequestBuilder builder=	MockMvcRequestBuilders
								.get("/api/Hii")
								.accept(MediaType.TEXT_PLAIN)
								.content("Hello From Test Service")
								.contentType(MediaType.TEXT_PLAIN);
		
		MvcResult result=mockMvc.perform(builder).andReturn();
		System.out.println("Result:::"+result.getResponse());
		MockHttpServletResponse response=result.getResponse();
		
		assertEquals(HttpStatus.OK.value(), response.getStatus());
		assertEquals("Hello From Test Service", response.getContentAsString());
	}

}
