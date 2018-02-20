package com.challenge.coding.web.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsWebConfig {
	
	@Value("${allowed.origin}")
	protected String[] allowedOrigin;
	
	public CorsWebConfig() {
		super();
	}

	
	@Bean
    public WebMvcConfigurer corsConfigurer() {
		WebMvcConfigurer configurer = new CorsWebMvcConfigurer(this.allowedOrigin);
		return configurer;
	}
}
