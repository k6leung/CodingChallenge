package com.challenge.coding.app.authentication.restController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.challenge.coding.app.authentication.model.request.AppAuthenticationRequest;
import com.challenge.coding.app.authentication.model.response.AppAuthenticationResponse;
import com.challenge.coding.app.authentication.service.AppAuthenticationService;

@RestController
@RequestMapping("/api")
public class AppAuthenticationRestController {
	
	@Autowired
	protected AppAuthenticationService appService;
	
	public AppAuthenticationRestController() {
		super();
	}
	
	public void setAppService(AppAuthenticationService appService) {
		this.appService = appService;
	}

	//due to the controller advice exception handler setup, we should let exceptions propagate to that handler	
	@RequestMapping(value="/authenticate", 
					method=RequestMethod.POST, 
					consumes="application/json", 
					produces="application/json")
	public AppAuthenticationResponse appAuthenticate(@RequestBody AppAuthenticationRequest request) {		
		
		AppAuthenticationResponse result = null;
		
		String token = this.appService.authenticateAppRequestWithToken(request);
		
		if(token == null) {
			throw new NullPointerException("Failed to authenticate.  Please try again later.");	
		}
		
		result = new AppAuthenticationResponse();
		result.setToken(token);
		
		return result;
	}

}
