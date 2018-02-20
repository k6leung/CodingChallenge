package com.challenge.coding.integration.http.message.payload.transformation.exception;

public class RestJsonMessagePayloadTransformationException extends RuntimeException {

	private static final long serialVersionUID = 7303352918589917811L;

	public RestJsonMessagePayloadTransformationException(String message, Throwable cause) {
		super(message, cause);
	}
	
	public RestJsonMessagePayloadTransformationException(String message) {
		super(message);
	}
	
}
