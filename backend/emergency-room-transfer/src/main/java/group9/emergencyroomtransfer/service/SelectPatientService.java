package group9.emergencyroomtransfer.service;

import group9.emergencyroomtransfer.model.patient.Patient;
import group9.emergencyroomtransfer.model.patient.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SelectPatientService {
    private PatientRepository patientRepository;

    @Autowired
    public SelectPatientService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    public List<Patient> getAll() { return (List<Patient>) patientRepository.findAll(); }

    public Optional<Patient> getByPhn(int phn) {
        return patientRepository.findFirstByPhn(phn);
    }
}
