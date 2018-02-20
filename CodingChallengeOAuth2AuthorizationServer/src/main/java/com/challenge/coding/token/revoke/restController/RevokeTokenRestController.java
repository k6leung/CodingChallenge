package com.challenge.coding.token.revoke.restController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.provider.token.DefaultTokenServices;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RevokeTokenRestController {
	
	@Autowired
	private DefaultTokenServices defaultTokenServices;
	
	public RevokeTokenRestController() {
		super();
	}
	
	@RequestMapping(value="/api/revokeToken/{token}", method=RequestMethod.DELETE)
	public String revokeToken(@PathVariable("token")String token) {
		this.defaultTokenServices.revokeToken(token);
		
		return token;
	}

}
