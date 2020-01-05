package com.aio.bootapp.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Profile("uat")
@Configuration
@EnableWebSecurity
public class SecurityConfigUAT extends WebSecurityConfigurerAdapter{

	@ConfigurationProperties(prefix = "spring.datasource")
	@Bean
	public DataSource dataSource() {
		return DataSourceBuilder.create().build();
	}


	@Autowired
	public void configureGlobaluat(AuthenticationManagerBuilder authenticationMgr) throws Exception{

		authenticationMgr.jdbcAuthentication().dataSource(dataSource()).passwordEncoder(new BCryptPasswordEncoder())
		.usersByUsernameQuery("select username,passwd, enabled from users where username=?")
		.authoritiesByUsernameQuery("select username, role from user_roles where username=?");
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

}