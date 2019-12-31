package com.aio.bootapp.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
    @Bean
    public Docket productApi() {
    	
    	Contact contact = new Contact(
                "K Vinayak",
                "http://www.allinonemagic.com", 
                "developer@allinonemagic.com"
        );
    	 
         
         ApiInfo apiInfo = new ApiInfo(
        "All in One Magic RESTful Web Service documentation", 
        "This pages documents All in One Magic RESTful Web Service endpoints", "1.0",
        "http://www.allinonemagic.com", contact, 
        "K Vinayak 2.0", "http://www.allinonemagic.com");
    	

        
        Docket docket =  new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo)
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.aio.bootapp.controllers"))
                .paths(PathSelectors.any())
                .build();
        
        return docket;
    }
   
}