package com.challenge.coding.integration.common.jdbcRepository;

import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.transaction.annotation.Transactional;

public class GenericSiteReportBatchRepositoryImpl implements GenericSiteReportBatchRepository{

	protected JdbcTemplate jdbcTemplate;
	
	protected String deleteStatement;
	
	protected String batchInsertStatement;
	
	public GenericSiteReportBatchRepositoryImpl() {
		super();
	}
	
	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	@Override
	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	public String getDeleteStatement() {
		return deleteStatement;
	}

	@Override
	public void setDeleteStatement(String deleteStatement) {
		this.deleteStatement = deleteStatement;
	}

	public String getBatchInsertStatement() {
		return batchInsertStatement;
	}

	@Override
	public void setBatchInsertStatement(String batchInsertStatement) {
		this.batchInsertStatement = batchInsertStatement;
	}

	@Override
	@Transactional
	public void deleleAllRecordsFromTable() {
		this.jdbcTemplate.update(this.deleteStatement);
	}
	
	@Override
	@Transactional
	public void batchInsertRecords(BatchPreparedStatementSetter preparedStatementSetter) {
		this.jdbcTemplate.batchUpdate(this.batchInsertStatement, preparedStatementSetter);
	}
	
}
