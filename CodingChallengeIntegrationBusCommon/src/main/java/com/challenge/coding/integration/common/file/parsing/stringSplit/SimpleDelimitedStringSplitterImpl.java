package com.challenge.coding.integration.common.file.parsing.stringSplit;

import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

public class SimpleDelimitedStringSplitterImpl implements BatchFileLineStringSplitter {
	
	protected String delimiter;
	
	public SimpleDelimitedStringSplitterImpl() {
		super();
	}
	
	public void setDelimiter(String delimiter) {
		this.delimiter = delimiter;
	}

	@Override
	public String[] splitLine(String input) {
		String[] fieldArray = null;
		
		StringTokenizer tok = new StringTokenizer(input, this.delimiter);
		List<String> tokenizedStrings = new ArrayList<String>();
		
		while(tok.hasMoreTokens()) {
			tokenizedStrings.add(tok.nextToken());
		}
		
		fieldArray = tokenizedStrings.toArray(new String[tokenizedStrings.size()]);
		
		return fieldArray;
	}	

}
