package com.aio.bootapp.serviceimpl.testserviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.aio.bootapp.service.testservice.TestService;

@Service
public class TestServiceImpl implements TestService {

	@Autowired
	@Qualifier("thirdPartyrestTemplate1")
	private RestTemplate restTemplate;
	
	@Override
	public String TestService() {
		System.out.println("restTemplate::"+restTemplate);
		 return "Hello From Test Service";
	}
}
