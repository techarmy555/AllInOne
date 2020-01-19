package com.aio.bootapp.security;

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
import org.springframework.security.crypto.password.PasswordEncoder;

@Profile("uat")
@Configuration
@EnableWebSecurity
public class SecurityConfigUAT extends WebSecurityConfigurerAdapter {

	@Autowired
	DataSource dataSource;

	@Autowired
	public void configureGlobaluat(AuthenticationManagerBuilder authenticationMgr) throws Exception {
		authenticationMgr.jdbcAuthentication().dataSource(dataSource)
				.usersByUsernameQuery("select username, password, enabled from users where username=?")
				.authoritiesByUsernameQuery("select username, authority from authorities where username=?")
				.passwordEncoder(new BCryptPasswordEncoder());
		// password:admin@123
	}

	// Authorization
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests().antMatchers("/protectedByUserRole*").hasRole("USER")
				.antMatchers("/protectedByAdminRole*").hasRole("ADMIN").antMatchers("/", "/notprotected*").permitAll()
				.and().httpBasic();
	}
}