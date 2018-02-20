package com.challenge.coding.app.authentication.token.revoke.model.response;

import java.io.Serializable;

public class RevokeTokenResponse implements Serializable {

	private static final long serialVersionUID = 3931711378927819870L;
	
	protected String revokedToken;
	
	public RevokeTokenResponse() {
		super();
	}

	public String getRevokedToken() {
		return revokedToken;
	}

	public void setRevokedToken(String revokedToken) {
		this.revokedToken = revokedToken;
	}

}
