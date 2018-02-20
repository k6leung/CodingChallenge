package com.challenge.coding.report.restController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.challenge.coding.report.model.SiteVisit;
import com.challenge.coding.report.repository.SiteVisitRepository;

@RestController
@RequestMapping("/api")
public class SiteVisitRestController {
	
	@Autowired
	protected SiteVisitRepository siteVisitRepository;
	
	public SiteVisitRestController() {
		super();
	}

	public void setSiteVisitRepository(SiteVisitRepository siteVisitRepository) {
		this.siteVisitRepository = siteVisitRepository;
	}

	@RequestMapping(value="/reportForDate/{dateStr}", 
					method=RequestMethod.GET, 
					produces="application/json")
	public List<SiteVisit>findSiteVisitByDate(@PathVariable String dateStr) {
		
		List<SiteVisit> result = this.siteVisitRepository.findSiteVisitByDate(dateStr, 5);
		
		return result;
	}
	
}
