package group9.emergencyroomtransfer.controller;

import group9.emergencyroomtransfer.model.symptom.Symptom;
import group9.emergencyroomtransfer.service.SelectSymptomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/systems")
public class SelectSymptomController {
    private SelectSymptomService selectSymptomService;

    @Autowired
    public SelectSymptomController (SelectSymptomService selectSymptomService) {
        this.selectSymptomService = selectSymptomService;
    }

    @GetMapping(path = "/{systemId}/symptoms")
    public List<Symptom> getSymptomsBySystemId (@PathVariable int systemId) {
        return selectSymptomService.getAllBySystemId(systemId);
    }
}
