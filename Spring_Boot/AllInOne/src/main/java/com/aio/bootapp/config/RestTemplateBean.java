package com.aio.bootapp.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.support.BasicAuthorizationInterceptor;
import org.springframework.web.client.RestTemplate;

@Configuration

public class RestTemplateBean {
	@Bean("thirdPartyrestTemplate1")
	public RestTemplate thirdPartyrestTemplate1()

	{	
		final RestTemplate restTemplate = new RestTemplate();
		restTemplate.getInterceptors().add(new BasicAuthorizationInterceptor("username1","password1"));
		return restTemplate;
	}
	@Bean("thirdPartyrestTemplate2")
	public RestTemplate thirdPartyrestTemplate2()

	{	
		final RestTemplate restTemplate = new RestTemplate();
		restTemplate.getInterceptors().add(new BasicAuthorizationInterceptor("username2","password2"));
		return restTemplate;
	}
}
