package com.challenge.coding.web.config;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

public class CorsWebMvcConfigurer extends WebMvcConfigurerAdapter {
	
	protected String[] allowedOrigin;
	
	public CorsWebMvcConfigurer(String[] allowedOrigin) {
		super();
		
		this.allowedOrigin = allowedOrigin;
	}
	
	@Override
    public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/api/**")
					.allowedOrigins(this.allowedOrigin)
					.maxAge(1800)
					.allowedMethods("GET", "PUT", "POST", "DELETE", "OPTIONS", "PATCH", "HEAD");
	}

}
