package test.com.challenge.coding;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import com.challenge.coding.integration.common.file.parsing.stringSplit.SimpleDelimitedStringSplitterImpl;

public class TestSimpleDelimitedStringSplitter {
	
	protected SimpleDelimitedStringSplitterImpl strSplitter;

	@Before
	public void setUp() throws Exception {
		this.strSplitter = new SimpleDelimitedStringSplitterImpl();
	}

	@Test
	public void test() {
		String delimiter = "|";
		this.strSplitter.setDelimiter(delimiter);
		
		String testString = "1|2|3";
		
		String[] resultArray= this.strSplitter.splitLine(testString);
		
		assertNotNull(resultArray);
		assertEquals(3, resultArray.length);
		
		assertTrue(resultArray[0].compareTo("1") == 0);
		assertTrue(resultArray[1].compareTo("2") == 0);
		assertTrue(resultArray[2].compareTo("3") == 0);
	}

}
