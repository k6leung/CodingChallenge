package test.com.challenge.coding;

import static org.junit.Assert.*;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.junit.Before;
import org.junit.Test;

import com.challenge.coding.integration.common.file.backup.fileExtension.DateTimeFileExtensionGenerator;

public class TestDateTimeFileExtensionGenerator {

	protected Date date;
	
	protected DateTimeFileExtensionGenerator generator;
	
	@Before
	public void setUp() throws Exception {	
		SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMdd");

		this.date = formatter.parse("20180201");
		
		this.generator = new DateTimeFileExtensionGenerator();
	}

	@Test
	public void testDefaultExtension() {
		String defaultExtension = "backup";
		this.generator.setDefaultExtension(defaultExtension);
		
		//no format string
		String generatedExtension = this.generator.generateFileExtensionWithDate(this.date);
		
		assertNotNull(generatedExtension);
		assertTrue(generatedExtension.compareTo(".backup") == 0);
	}
	
	@Test
	public void testGeneratedExtensionShouldMatch() {
		String expectedExtension = ".20180201";
		
		this.generator.setFormatString("yyyyMMdd");
		this.generator.setDefaultExtension("backup");
		
		String generatedExtension = this.generator.generateFileExtensionWithDate(this.date);
		
		assertNotNull(generatedExtension);
		assertTrue(expectedExtension.compareTo(generatedExtension) == 0);
	}

}
