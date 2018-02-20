package com.challenge.coding.integration.common.file.move;

import java.io.File;
import java.util.Date;

import org.apache.log4j.Logger;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageHandlingException;
import org.springframework.messaging.MessageHeaders;
import org.springframework.messaging.support.ErrorMessage;

import com.challenge.coding.integration.common.file.backup.fileExtension.DateTimeFileExtensionGenerator;

//THIS CLASS ONLY TARGETS PAYLOAD OF TYPE java.io.File, please configure carefully
//this class move the input File object to outputDirectory, add ".YYYYMMDDHHMMSS" extension to end of file
//this service returns the original message - service activator should have output-channel to pass the message elsewhere
//this class should now throw exception as file moving is at the end of the integration pipeline
public class BackupFileMovingService {

	private static Logger log = Logger.getLogger(BackupFileMovingService.class);
	
	protected String outputDirectoryFullPath;
	
	protected DateTimeFileExtensionGenerator fileExtensionGenerator;
	
	public BackupFileMovingService() {
		super();
	}

	public void setOutputDirectoryFullPath(String outputDirectoryFullPath) {
		this.outputDirectoryFullPath = outputDirectoryFullPath;
	}
	
	public void setFileExtensionGenerator(DateTimeFileExtensionGenerator fileExtensionGenerator) {
		this.fileExtensionGenerator = fileExtensionGenerator;
	}

	public Message<File> moveFile(Message<File> message) {
		MessageHeaders headers = message.getHeaders();
		
		File originalFile = message.getPayload();
		//move the file
		try {
			Date date = new Date(headers.getTimestamp());
			String backupFileExtension = this.fileExtensionGenerator.generateFileExtensionWithDate(date);
			String originalFilename = originalFile.getName();
			
			originalFile.renameTo(new File(this.outputDirectoryFullPath, originalFilename + backupFileExtension));
		} catch (Exception e) {
			//fail silently
			log.error(e.getMessage(), e);
		}
		
		return message;
	}
	
	public ErrorMessage moveFileOnError(ErrorMessage errorMessage) {
		//extract original message from the error message
		Throwable payload = errorMessage.getPayload();
		if((payload != null) && (payload instanceof MessageHandlingException)) {
			MessageHandlingException exception = (MessageHandlingException)payload;
			Message<File> originalMessage = (Message<File>)exception.getFailedMessage();
			
			//actual file moving
			this.moveFile(originalMessage);
		}
		
		return errorMessage;
	}
}
