package com.challenge.coding.integration.file.input.message.header.enricher;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

import com.challenge.coding.integration.common.file.parsing.stringSplit.BatchFileLineStringSplitter;
import com.challenge.coding.integration.file.input.message.header.enricher.exception.InputFileParsingMessageHeaderEnrichException;

public class InputFileParsingMessageHeaderEnricher {
	
	private static Logger log = Logger.getLogger(InputFileParsingMessageHeaderEnricher.class);
	
	protected BatchFileLineStringSplitter lineSplitter;
	
	public InputFileParsingMessageHeaderEnricher() {
		super();
	}

	public void setLineSplitter(BatchFileLineStringSplitter lineSplitter) {
		this.lineSplitter = lineSplitter;
	}
	
	//file was not really a csv format, but delimiter separated text file...
	//open the file, skip the header line, then read line by line to split the line into string array for later JdbcTemplate batch insert
	//throws a runtime exception if anything fails so spring integration can pick it up and handle the exception
	public List<String[]> parsePayload(File payload) {
		List<String[]> result = new ArrayList<String[]>();
		
		FileReader fileReader = null;
		BufferedReader bufferedReader = null;
		try {
			String line = null;
			boolean headerRead = false;
			String[] fieldArray = null;
			
			fileReader = new FileReader(payload);
			bufferedReader = new BufferedReader(fileReader);
			
			while((line = bufferedReader.readLine()) != null) {
				if(headerRead) { //skip header
					//break the line into fields
					fieldArray = this.lineSplitter.splitLine(line);
					
					result.add(fieldArray);	
				} else {
					headerRead = true;
				}
			}
		} catch (IOException ioe) { //translate exception to RuntimeException for Spring integration
			throw new InputFileParsingMessageHeaderEnrichException(ioe.getMessage(), ioe);
		} catch (Exception e) { //translate exception to RuntimeException for Spring integration
			throw new InputFileParsingMessageHeaderEnrichException(e.getMessage(), e);
		} finally {
			//closing fail is ok in this scenario since its only a file read.
			if(bufferedReader != null) {
				try {
					bufferedReader.close();
				} catch(IOException ioe) {
					log.error(ioe.getMessage(), ioe); //cannot log with aspect as this exception is not thrown
				}
			}
			
			if(fileReader != null) {
				try {
					fileReader.close();
				} catch (IOException ioe) {
					log.error(ioe.getMessage(), ioe); //cannot log with aspect as this exception is not thrown
				}
			}
		}
		
		return result;
	}
}
