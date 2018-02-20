package com.challenge.coding.integration.file.jdbc.statementSetter;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

import org.springframework.jdbc.core.BatchPreparedStatementSetter;

public class FileBatchPreparedStatementSetter implements BatchPreparedStatementSetter {

	protected List<String[]> dataRecords;
	
	public FileBatchPreparedStatementSetter(List<String[]> dataRecords) {
		super();
		
		if(dataRecords == null) {
			throw new IllegalArgumentException("Empty or invalid dataRecords.");
		}
		
		this.dataRecords = dataRecords;
	}

	@Override
	public int getBatchSize() {
		return this.dataRecords.size();
	}

	@Override
	public void setValues(PreparedStatement pstmt, int index) throws SQLException {
		//pstmt and index are given by spring, should never be null or negative value
		//index is always positive and smaller than the value returned by this.getBatchSize()
		String[] record = this.dataRecords.get(index);
		
		String dateStr = record[0];
		pstmt.setString(1, dateStr);
		
		String website = record[1];
		pstmt.setString(2, website);
		
		String visitCount = record[2];
		pstmt.setString(3, visitCount);
	}
}
