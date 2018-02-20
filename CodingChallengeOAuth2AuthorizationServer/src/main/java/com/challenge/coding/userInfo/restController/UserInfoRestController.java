package com.challenge.coding.userInfo.restController;

import java.security.Principal;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserInfoRestController {
	
	public UserInfoRestController() {
		super();
	}
	
	@RequestMapping(value="/api/userInfo")
	public Principal user(Principal user) {
		return user;
	}

}
