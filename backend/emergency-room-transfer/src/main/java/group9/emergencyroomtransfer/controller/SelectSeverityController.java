package group9.emergencyroomtransfer.controller;

import group9.emergencyroomtransfer.model.severity.Severity;
import group9.emergencyroomtransfer.service.SelectSeverityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/symptoms")
public class SelectSeverityController {
    private SelectSeverityService selectSeverityService;

    @Autowired
    public SelectSeverityController(SelectSeverityService selectSeverityService) {
        this.selectSeverityService = selectSeverityService;
    }

    @GetMapping(path = "/{symptomId}/severities")
    public List<Severity> getSeveritiesBySymptomId(@PathVariable int symptomId) {
        return selectSeverityService.getAllBySymptomId(symptomId);
    }
}
