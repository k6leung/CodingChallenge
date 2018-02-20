package com.challenge.coding;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@SpringBootApplication
@EnableConfigServer
public class CodingChallengeConfigServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(CodingChallengeConfigServerApplication.class, args);
	}
}
