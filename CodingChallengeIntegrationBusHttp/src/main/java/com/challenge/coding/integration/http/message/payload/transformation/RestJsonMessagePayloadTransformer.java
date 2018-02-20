package com.challenge.coding.integration.http.message.payload.transformation;

import java.io.IOException;
import java.util.List;

import com.challenge.coding.integration.http.message.payload.transformation.exception.RestJsonMessagePayloadTransformationException;
import com.challenge.coding.integration.http.model.excludeList.ExcludeListItem;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.CollectionType;

public class RestJsonMessagePayloadTransformer {

	public RestJsonMessagePayloadTransformer() {
		super();
	}
	
	public List<ExcludeListItem> transformPayload(String payload) {
		
		List<ExcludeListItem> result = null;
		
		ObjectMapper objectMapper = new ObjectMapper();
		CollectionType type = objectMapper.getTypeFactory().constructCollectionType(List.class, ExcludeListItem.class);
		
		try {
			result = objectMapper.readValue(payload, type);
		} catch (JsonMappingException jme) { //translate exception to RuntimeException for Spring integration
			throw new RestJsonMessagePayloadTransformationException(jme.getMessage(), jme);
		} catch (IOException ioe) { //translate exception to RuntimeException for Spring integration
			throw new RestJsonMessagePayloadTransformationException(ioe.getMessage(), ioe);
		}
		
		return result;
	}
	
}
