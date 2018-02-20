package com.challenge.coding.app.authentication.token.revoke.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

@Service
public class OAuth2TokenRevokeServiceImpl implements OAuth2TokenRevokeService {
	
	@Value("${oauth2.token.revoke.uri}")
	protected String revokeTokenUri;
	
	public OAuth2TokenRevokeServiceImpl() {
		super();
	}

	@Override
	public String revokeToken(String token) {
		
		RestTemplate restTemplate = new RestTemplate();
		
		//add Bearer authorization token
		MultiValueMap<String, String> headers = new LinkedMultiValueMap<>();
		headers.add("authorization", "Bearer " + token);
		HttpEntity<?> entity = new HttpEntity<Object>(headers);
		
		//delete request
		restTemplate.exchange(this.revokeTokenUri + token, HttpMethod.DELETE, entity, String.class);
		
		return token;
	}

}
