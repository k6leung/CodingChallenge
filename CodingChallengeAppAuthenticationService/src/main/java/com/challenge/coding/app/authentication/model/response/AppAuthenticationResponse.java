package com.challenge.coding.app.authentication.model.response;

import java.io.Serializable;

public class AppAuthenticationResponse implements Serializable {

	private static final long serialVersionUID = -5242968305153340474L;
	
	protected String token;
	
	public AppAuthenticationResponse() {
		super();
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

}
