package com.challenge.coding.integration.common.file.backup.fileExtension;

import java.util.Date;
import java.text.SimpleDateFormat;

import org.apache.log4j.Logger;

//this class should now throw exception as file moving is at the end of the integration pipeline
public class DateTimeFileExtensionGenerator {
	
	private static Logger log = Logger.getLogger(DateTimeFileExtensionGenerator.class);
	
	//format must be supported by java.text.SimpleDateFormat, no space, because file extension shouldn't have spaces
	protected String formatString;
	
	protected String defaultExtension;
	
	public DateTimeFileExtensionGenerator() {
		super();
	}

	public void setFormatString(String formatString) {
		this.formatString = formatString;
	}
	
	public void setDefaultExtension(String defaultExtension) {
		this.defaultExtension = defaultExtension;
	}

	public String generateFileExtensionWithDate(Date date) {
		StringBuilder resultBuilder = new StringBuilder(".");
		String extension = "";
		try {
			SimpleDateFormat formatter = new SimpleDateFormat(this.formatString);
			
			extension = formatter.format(date);
		} catch (Exception e) {
			//fail silently, log the error and give default extension
			log.error(e.getMessage(), e);
			
			extension = this.defaultExtension;
		}
		resultBuilder.append(extension);
		
		return resultBuilder.toString();
	}

}

