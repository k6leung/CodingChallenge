package com.challenge.coding.integration.http.service;

import java.util.List;

import org.springframework.messaging.Message;
import org.springframework.transaction.annotation.Transactional;

import com.challenge.coding.integration.common.jdbcRepository.GenericSiteReportBatchRepository;
import com.challenge.coding.integration.http.jdbc.statementSetter.HttpBatchPreparedStatementSetter;
import com.challenge.coding.integration.http.model.excludeList.ExcludeListItem;

public class JdbcRestResponseBatchInsertService {

	protected GenericSiteReportBatchRepository genericSiteReportBatchRepository;
	
	public JdbcRestResponseBatchInsertService() {
		super();
	}
	
	public void setGenericSiteReportBatchRepository(GenericSiteReportBatchRepository genericSiteReportBatchRepository) {
		this.genericSiteReportBatchRepository = genericSiteReportBatchRepository;
	}
	
	//call repository to delete all records from table
	//batch insert from the record list
	//if anything fails(SqlException will be translated to RuntimeException by spring), it should rollback as if nothing happened (spring transaction management)
	//single transaction for the table delete and batch insert
	
	@Transactional
	public void processMessage(Message<List<ExcludeListItem>> message) {
		List<ExcludeListItem> payload = message.getPayload();
		
		if(payload != null) {
			this.genericSiteReportBatchRepository.deleleAllRecordsFromTable();
			
			HttpBatchPreparedStatementSetter statementSetter = new HttpBatchPreparedStatementSetter(payload);
			this.genericSiteReportBatchRepository.batchInsertRecords(statementSetter);
		}
		
	}
}
