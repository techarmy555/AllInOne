package com.aio.bootapp.aspect;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;

@Configuration
@EnableAspectJAutoProxy
@Aspect
public class TestAspects {

	@Before("execution(* com.aio.bootapp.controllers.testcontroller.TestController.getTest(..))")

	public void logBefore(JoinPoint joinPoint) {

		System.out.println("logBefore() is running!");

		System.out.println("hijacked : " + joinPoint.getSignature().getName());

		System.out.println("******");

	}
}
