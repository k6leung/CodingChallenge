package com.challenge.coding.integration.common.jdbcRepository;

import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;

public interface GenericSiteReportBatchRepository {
	
	public void setJdbcTemplate(JdbcTemplate jdbcTemplate);
	
	public void setDeleteStatement(String deleteStatement);
	
	public void setBatchInsertStatement(String batchInsertStatement);
	
	public void deleleAllRecordsFromTable();
	
	public void batchInsertRecords(BatchPreparedStatementSetter preparedStatementSetter);

}
