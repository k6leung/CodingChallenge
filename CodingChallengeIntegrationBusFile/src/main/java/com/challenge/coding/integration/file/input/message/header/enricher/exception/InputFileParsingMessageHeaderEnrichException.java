package com.challenge.coding.integration.file.input.message.header.enricher.exception;

public class InputFileParsingMessageHeaderEnrichException extends RuntimeException {

	private static final long serialVersionUID = -7292490197705696210L;
	
	public InputFileParsingMessageHeaderEnrichException(String message, Throwable cause) {
		super(message, cause);
	}
	
	public InputFileParsingMessageHeaderEnrichException(String message) {
		super(message);
	}
}
