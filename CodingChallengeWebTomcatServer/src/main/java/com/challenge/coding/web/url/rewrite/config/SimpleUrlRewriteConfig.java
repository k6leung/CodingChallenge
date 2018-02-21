package com.challenge.coding.web.url.rewrite.config;

import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.web.servlet.ErrorPage;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class SimpleUrlRewriteConfig extends WebMvcConfigurerAdapter {
	//this class simply rewrite the URL and forward to the index.html where angular
	//is running on, whenever container receives 404 (can be angular routes that browser
	//doesn't understand and sends the http request)
	public SimpleUrlRewriteConfig() {
		super();
	}
	
	@Override
    public void addViewControllers(ViewControllerRegistry registry) {
		//adds a view to intercept /notFound and forward to /index.html 
        registry.addViewController("/notFound").setViewName("forward:/index.html");
    }


    @Bean
    public EmbeddedServletContainerCustomizer containerCustomizer() {
        return new SimpleUrlRewriteWebContainerCustomizer();
    }


}
