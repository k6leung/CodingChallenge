package com.challenge.coding.report.restController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.challenge.coding.report.repository.SiteVisitRepository;

@RestController
@RequestMapping("/api")
public class ReportDateRestController {
	
	@Autowired
	protected SiteVisitRepository siteVisitRepository;
	
	public ReportDateRestController() {
		super();
	}

	public void setSiteVisitRepository(SiteVisitRepository siteVisitRepository) {
		this.siteVisitRepository = siteVisitRepository;
	}

	@RequestMapping(value="/dates", 
					method=RequestMethod.GET, 
					produces="application/json")
	public List<String> findDistinctDates() {
		List<String> result = this.siteVisitRepository.findDistinctDate();
		
		return result;
	}
	
}
