package com.challenge.coding;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;

@SpringBootApplication
@EnableAuthorizationServer
@EnableResourceServer
public class CodingChallengeOAuth2AuthorizationServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(CodingChallengeOAuth2AuthorizationServerApplication.class, args);
	}
}
