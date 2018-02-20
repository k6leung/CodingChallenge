package com.challenge.coding.app.authentication.model.request;

import java.io.Serializable;

public class AppAuthenticationRequest implements Serializable {

	private static final long serialVersionUID = 3564786201498644733L;
	
	protected String username;
	
	protected String password;
	
	public AppAuthenticationRequest() {
		super();
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
