package com.aio.bootapp.serviceimpl.testserviceimpl;

import org.springframework.stereotype.Service;

import com.aio.bootapp.service.testservice.TestService;

@Service
public class TestServiceImpl implements TestService {

	@Override
	public String TestService() {
		 return "Hello From Test Service";
	}
}
