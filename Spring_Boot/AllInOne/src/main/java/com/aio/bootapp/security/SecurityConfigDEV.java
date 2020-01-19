package com.aio.bootapp.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Profile("dev")
@Configuration
@EnableWebSecurity
public class SecurityConfigDEV extends WebSecurityConfigurerAdapter{

	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder authenticationMgr) throws Exception{

		authenticationMgr.inMemoryAuthentication()
		.withUser("devuser").password(passwordEncoder().encode("dev")).authorities("ROLE_USER")
		.and()
		.withUser("adminuser").password(passwordEncoder().encode("admin")).authorities("ROLE_USER","ROLE_ADMIN");	
	}


	//Authorization
	@Override
	protected void configure(HttpSecurity http) throws Exception{
		http
		.authorizeRequests()
		.antMatchers("/protectedByUserRole*").hasRole("USER")
		.antMatchers("/protectedByAdminRole*").hasRole("ADMIN")
		.antMatchers("/","/notprotected*").permitAll()
		.and()
		.httpBasic();
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

}