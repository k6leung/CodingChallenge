package com.challenge.coding.web.url.rewrite.config;

import org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.web.servlet.ErrorPage;
import org.springframework.http.HttpStatus;

public class SimpleUrlRewriteWebContainerCustomizer implements EmbeddedServletContainerCustomizer {
	
	public SimpleUrlRewriteWebContainerCustomizer() {
		super();
	}

	//add an error page path /notFound to 404 errors.
	@Override
	public void customize(ConfigurableEmbeddedServletContainer container) {
		container.addErrorPages(new ErrorPage(HttpStatus.NOT_FOUND, "/notFound"));
	}

}
