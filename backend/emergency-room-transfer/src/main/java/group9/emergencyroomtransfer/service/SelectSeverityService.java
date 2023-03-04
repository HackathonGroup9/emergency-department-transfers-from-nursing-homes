package group9.emergencyroomtransfer.service;

import group9.emergencyroomtransfer.controller.SelectSeverityController;
import group9.emergencyroomtransfer.model.severity.Severity;
import group9.emergencyroomtransfer.model.severity.SeverityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SelectSeverityService {
    private SeverityRepository severityRepository;

    @Autowired
    public SelectSeverityService(SeverityRepository severityRepository) {
        this.severityRepository = severityRepository;
    }

    public List<Severity> getAllBySymptomId(int symptomId) {
        return severityRepository.findAllBySymptomId(symptomId);
    }

    public Severity getBySeverityId(int severityId) {return severityRepository.findFirstBySeverityId(severityId); }
}
