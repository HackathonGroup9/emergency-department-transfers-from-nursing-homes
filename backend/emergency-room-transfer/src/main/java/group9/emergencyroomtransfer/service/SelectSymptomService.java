package group9.emergencyroomtransfer.service;

import group9.emergencyroomtransfer.model.symptom.Symptom;
import group9.emergencyroomtransfer.model.symptom.SymptomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SelectSymptomService {
    private SymptomRepository symptomRepository;

    @Autowired
    public SelectSymptomService(SymptomRepository symptomRepository) {
        this.symptomRepository = symptomRepository;
    }

    public List<Symptom> getAllBySystemId(int systemId) {
        return symptomRepository.findAllBySystemId(systemId);
    }
}
