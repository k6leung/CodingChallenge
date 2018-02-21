package com.challenge.coding.app.authentication.token.revoke.restController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.challenge.coding.app.authentication.token.revoke.model.response.RevokeTokenResponse;
import com.challenge.coding.app.authentication.token.revoke.service.OAuth2TokenRevokeService;

@RestController
@RequestMapping("/api")
public class Oauth2TokenRevokeRestController {
	
	@Autowired
	protected OAuth2TokenRevokeService tokenRevokeService;
	
	public Oauth2TokenRevokeRestController() {
		super();
	}

	public void setTokenRevokeService(OAuth2TokenRevokeService tokenRevokeService) {
		this.tokenRevokeService = tokenRevokeService;
	}
	
	@RequestMapping(value="/revoke/{token}", 
						method=RequestMethod.DELETE, 
						produces="application/json")
	public RevokeTokenResponse revokeToken(@PathVariable("token")String token) {
		
		this.tokenRevokeService.revokeToken(token);
		
		RevokeTokenResponse response = new RevokeTokenResponse();
		response.setRevokedToken(token);
		
		return response;
	}

}
