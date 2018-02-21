package test.com.challenge.coding;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.springframework.test.context.junit4.SpringRunner;

import com.challenge.coding.integration.http.message.payload.transformation.RestJsonMessagePayloadTransformer;
import com.challenge.coding.integration.http.model.excludeList.ExcludeListItem;

public class TestRestJsonMessagePayloadTransformer {
	
	protected RestJsonMessagePayloadTransformer transformer;

	@Before
	public void setUp() throws Exception {
		this.transformer = new RestJsonMessagePayloadTransformer();
	}

	@Test
	public void test() {
		String testJson = "[{\"host\":\"google.com\",\"excludedSince\":\"2016-03-12\", \"excludedTill\":\"2016-03-14\"}," +
						   "{\"host\":\"gmail.com\",\"excludedSince\":\"2017-12-11\"}]";
		
		List<ExcludeListItem> parseResult = this.transformer.transformPayload(testJson);
		
		assertNotNull(parseResult);
		
		int listSize = parseResult.size();
		assertEquals(2, listSize);
		
		ExcludeListItem item1 = parseResult.get(0);
		assertTrue(item1.getHost().compareTo("google.com") == 0);
		
		ExcludeListItem item2 = parseResult.get(1);
		assertNull(item2.getExcludedTill());
				
	}

}
