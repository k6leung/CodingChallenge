package com.challenge.coding.integration.http.model.excludeList;

import java.io.Serializable;

public class ExcludeListItem implements Serializable {

	private static final long serialVersionUID = 2568853320499305899L;

	protected String host;
	
	protected String excludedSince;
	
	protected String excludedTill;
	
	public ExcludeListItem() {
		super();
	}

	public String getHost() {
		return host;
	}

	public void setHost(String host) {
		this.host = host;
	}

	public String getExcludedSince() {
		return excludedSince;
	}

	public void setExcludedSince(String excludedSince) {
		this.excludedSince = excludedSince;
	}

	public String getExcludedTill() {
		return excludedTill;
	}

	public void setExcludedTill(String excludedTill) {
		this.excludedTill = excludedTill;
	}
	
}
