package group9.emergencyroomtransfer.controller;

import group9.emergencyroomtransfer.model.patient.Patient;
import group9.emergencyroomtransfer.service.SelectPatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/patients")
public class SelectPatientController {

    private SelectPatientService selectPatientService;

    @Autowired
    public SelectPatientController(SelectPatientService selectPatientService) {
        this.selectPatientService = selectPatientService;
    }
    @GetMapping
    public List<Patient> getAllPatients() {
        return selectPatientService.getAll();
    }

    @GetMapping(path = "/{phn}")
    public Optional<Patient> getPatientByPhn(@PathVariable int phn) {
        return selectPatientService.getByPhn(phn);
    }

}
