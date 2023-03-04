package group9.emergencyroomtransfer.controller;

import group9.emergencyroomtransfer.model.patient.Patient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/patients")
public class SelectPatientController {

    @GetMapping
    public List<Patient> getAllPatients() {
        return null;
    }

}
