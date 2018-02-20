package com.challenge.coding.web.exception.controllerAdvice.model;

import java.io.Serializable;

public class ErrorRestResponse implements Serializable {
	
	private static final long serialVersionUID = 726565657878058072L;
	
	protected String errorMessage;
	
	public ErrorRestResponse() {
		super();
	}

	public String getErrorMessage() {
		return errorMessage;
	}

	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}

}
