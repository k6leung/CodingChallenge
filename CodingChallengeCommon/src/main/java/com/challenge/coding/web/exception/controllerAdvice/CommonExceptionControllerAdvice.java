package com.challenge.coding.web.exception.controllerAdvice;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.challenge.coding.web.exception.controllerAdvice.model.ErrorRestResponse;

@ControllerAdvice
public class CommonExceptionControllerAdvice {
	
	public CommonExceptionControllerAdvice() {
		super();
	}
	
	@ExceptionHandler(value= {RuntimeException.class, Exception.class})
	public ResponseEntity<ErrorRestResponse> handleWebException(Exception e) {
		String errorMessage = e.getMessage();
		
		ErrorRestResponse errorRestResponse = new ErrorRestResponse();
		errorRestResponse.setErrorMessage(errorMessage);
		
		ResponseEntity<ErrorRestResponse> result = new ResponseEntity<ErrorRestResponse>(errorRestResponse, 
																							HttpStatus.INTERNAL_SERVER_ERROR);
		return result;
	}

}
