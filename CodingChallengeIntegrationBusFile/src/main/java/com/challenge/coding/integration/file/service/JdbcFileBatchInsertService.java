package com.challenge.coding.integration.file.service;

import java.io.File;
import java.util.List;

import org.springframework.messaging.Message;
import org.springframework.messaging.MessageHeaders;
import org.springframework.transaction.annotation.Transactional;

import com.challenge.coding.integration.common.jdbcRepository.GenericSiteReportBatchRepository;
import com.challenge.coding.integration.file.jdbc.statementSetter.FileBatchPreparedStatementSetter;



public class JdbcFileBatchInsertService {

protected String dataRecordHeaderName;
	
	protected GenericSiteReportBatchRepository genericSiteReportBatchRepository;
	
	public JdbcFileBatchInsertService() {
		super();
	}
	
	public void setDataRecordHeaderName(String dataRecordHeaderName) {
		this.dataRecordHeaderName = dataRecordHeaderName;
	}
	
	public void setGenericSiteReportBatchRepository(GenericSiteReportBatchRepository genericSiteReportBatchRepository) {
		this.genericSiteReportBatchRepository = genericSiteReportBatchRepository;
	}

	//if message header has the mapped csv record list,
	//call repository to delete all records from table
	//batch insert from the record list
	//if anything fails(SqlException will be translated to RuntimeException by spring), it should rollback as if nothing happened (spring transaction management)
	//single transaction for the table delete and batch insert
	
	@Transactional
	public Message<File> processMessage(Message<File> message) {
		MessageHeaders headers = message.getHeaders();
		
		Object dataRecordsObj = headers.get(this.dataRecordHeaderName);
		if((dataRecordsObj != null) && (dataRecordsObj instanceof List)) {
			List<String[]> dataRecords = (List<String[]>) dataRecordsObj; //lose the generic type after stored in the header map...
			
			this.genericSiteReportBatchRepository.deleleAllRecordsFromTable();
			
			FileBatchPreparedStatementSetter statementSetter = new FileBatchPreparedStatementSetter(dataRecords);
			this.genericSiteReportBatchRepository.batchInsertRecords(statementSetter);
		}
		
		return message;
	}
}
