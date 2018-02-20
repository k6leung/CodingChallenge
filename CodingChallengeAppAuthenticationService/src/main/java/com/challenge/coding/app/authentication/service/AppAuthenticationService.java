package com.challenge.coding.app.authentication.service;

import com.challenge.coding.app.authentication.model.request.AppAuthenticationRequest;

public interface AppAuthenticationService {

	public String authenticateAppRequestWithToken(AppAuthenticationRequest request);
	
}
