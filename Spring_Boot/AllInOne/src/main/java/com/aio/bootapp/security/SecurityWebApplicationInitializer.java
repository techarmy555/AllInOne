package com.aio.bootapp.security;

import org.springframework.context.annotation.Profile;
import org.springframework.security.web.context.AbstractSecurityWebApplicationInitializer;

@Profile("uat")
public class SecurityWebApplicationInitializer extends AbstractSecurityWebApplicationInitializer {

}