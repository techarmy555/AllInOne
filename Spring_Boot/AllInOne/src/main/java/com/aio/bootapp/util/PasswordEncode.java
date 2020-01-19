package com.aio.bootapp.util;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordEncode {

  public static void main(String[] args) {
		String password = "vin";
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String hashedPassword = passwordEncoder.encode(password);

		System.out.println(hashedPassword);
		password = "kam";
		hashedPassword = passwordEncoder.encode(password);

		System.out.println(hashedPassword);
	}

  }