package com.challenge.coding.app.authentication.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.client.token.grant.password.ResourceOwnerPasswordResourceDetails;
import org.springframework.security.oauth2.common.AuthenticationScheme;
import org.springframework.stereotype.Service;

import com.challenge.coding.app.authentication.model.request.AppAuthenticationRequest;

@Service
public class AppAuthenticationServiceImpl implements AppAuthenticationService {
	
	@Value("${oauth2.token.access.uri}")
	protected String oauth2TokenAccessUri;
	
	@Value("${oauth2.authorized.username}")
	protected String oauth2AuthorizedUsername;
	
	@Value("${oauth2.authorized.user.password}")
	protected String oauth2AuthorizedUserPassword;
	
	@Value("${oauth2.client.scope}")
	protected List<String> oauth2ClientScope;

	public AppAuthenticationServiceImpl() {
		super();
	}
	
	public void setOauth2TokenAccessUri(String oauth2TokenAccessUri) {
		this.oauth2TokenAccessUri = oauth2TokenAccessUri;
	}

	public void setOauth2AuthorizedUsername(String oauth2AuthorizedUsername) {
		this.oauth2AuthorizedUsername = oauth2AuthorizedUsername;
	}

	public void setOauth2AuthorizedUserPassword(String oauth2AuthorizedUserPassword) {
		this.oauth2AuthorizedUserPassword = oauth2AuthorizedUserPassword;
	}

	//let spring mvc controller advice exception handler handle exceptions (common exception handling)
	@Override
	public String authenticateAppRequestWithToken(AppAuthenticationRequest request) {
		
		//logs printed by logging aspect
		//user credentials
		String username = request.getUsername();
		String password = request.getPassword();
		
		
		ResourceOwnerPasswordResourceDetails resourceDetails = new ResourceOwnerPasswordResourceDetails();
		
		//setup oauth2 authentication and authorized user credentials
		resourceDetails.setClientAuthenticationScheme(AuthenticationScheme.header);
		resourceDetails.setAccessTokenUri(this.oauth2TokenAccessUri);
		resourceDetails.setScope(this.oauth2ClientScope);
		resourceDetails.setUsername(this.oauth2AuthorizedUsername);
		resourceDetails.setPassword(this.oauth2AuthorizedUserPassword);
		
		//set user credentials
		resourceDetails.setClientId(username);
		resourceDetails.setClientSecret(password);
		
		//rest token request
		OAuth2RestTemplate restTemplate = new OAuth2RestTemplate(resourceDetails);
		String token = restTemplate.getAccessToken().getValue();
		
		return token;
	}
}
