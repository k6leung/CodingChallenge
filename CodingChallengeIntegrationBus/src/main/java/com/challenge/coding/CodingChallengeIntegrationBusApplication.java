package com.challenge.coding;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;

@SpringBootApplication
@ImportResource(value= {"classpath:CommonPropertiesConfig.xml",
						"classpath:/fileIntegration/FileIntegrationConfig.xml", 
						"classpath:/restIntegration/RestIntegrationConfig.xml"})
public class CodingChallengeIntegrationBusApplication {

	public static void main(String[] args) {
		SpringApplication.run(CodingChallengeIntegrationBusApplication.class, args);
	}
}
