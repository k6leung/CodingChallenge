package test.com.challenge.coding;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;
import org.springframework.http.ResponseEntity;

import com.challenge.coding.web.exception.controllerAdvice.CommonExceptionControllerAdvice;
import com.challenge.coding.web.exception.controllerAdvice.model.ErrorRestResponse;

public class TestCommonExceptionControllerAdvice {

	protected CommonExceptionControllerAdvice advice;
	
	protected RuntimeException re;
	
	protected Exception e;
	
	protected static final String RuntimeExceptionErrorMessage = "Test runtime exception";
	
	protected static final String exceptionErrorMessage = "Test exception";
	
	@Before
	public void setUp() throws Exception {
		this.advice = new CommonExceptionControllerAdvice();
		
		this.re = new RuntimeException(TestCommonExceptionControllerAdvice.RuntimeExceptionErrorMessage);
		
		this.e = new Exception(TestCommonExceptionControllerAdvice.exceptionErrorMessage);
	}

	@Test
	public void testExceptionShouldReturnResponseEntity() {
		
		Object responseObj = this.advice.handleWebException(e);
		assertNotNull(responseObj);
		
		assertTrue(responseObj instanceof ResponseEntity);
		
		ResponseEntity response = (ResponseEntity)responseObj;
		
		Object body = response.getBody();
		assertNotNull(body);
		
		assertTrue(body instanceof ErrorRestResponse);
		
		ErrorRestResponse restResponse = (ErrorRestResponse)body;
		assertTrue(restResponse.getErrorMessage()
				.compareTo(TestCommonExceptionControllerAdvice.exceptionErrorMessage) == 0);
	}
	
	@Test
	public void testRuntimeExceptionShouldReturnResponseEntity() {
		Object responseObj = this.advice.handleWebException(re);
		assertNotNull(responseObj);
		
		assertTrue(responseObj instanceof ResponseEntity);
		
		ResponseEntity response = (ResponseEntity)responseObj;
		
		Object body = response.getBody();
		assertNotNull(body);
		
		assertTrue(body instanceof ErrorRestResponse);
		
		ErrorRestResponse restResponse = (ErrorRestResponse)body;
		assertTrue(restResponse.getErrorMessage()
				.compareTo(TestCommonExceptionControllerAdvice.RuntimeExceptionErrorMessage) == 0);
	}

}
