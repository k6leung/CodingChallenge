package com.challenge.coding.integration.http.jdbc.statementSetter;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

import org.springframework.jdbc.core.BatchPreparedStatementSetter;

import com.challenge.coding.integration.http.model.excludeList.ExcludeListItem;

public class HttpBatchPreparedStatementSetter implements BatchPreparedStatementSetter {

	protected List<ExcludeListItem> dataRecords;
	
	public HttpBatchPreparedStatementSetter(List<ExcludeListItem> dataRecords) {
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
		ExcludeListItem record = this.dataRecords.get(index);
		
		String host = record.getHost();
		pstmt.setString(1, host);
		
		String excludedSince = record.getExcludedSince();
		pstmt.setString(2, excludedSince);
		
		String excludedTill = record.getExcludedTill();
		pstmt.setString(3, excludedTill);
	}

}
