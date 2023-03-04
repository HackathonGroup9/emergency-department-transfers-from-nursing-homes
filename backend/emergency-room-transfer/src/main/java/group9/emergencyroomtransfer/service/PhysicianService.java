package group9.emergencyroomtransfer.service;

import group9.emergencyroomtransfer.model.physician.Physician;
import group9.emergencyroomtransfer.model.physician.PhysicianRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class PhysicianService {

    private final PhysicianRepository physicianRepository;

    @Autowired
    public PhysicianService(PhysicianRepository physicianRepository) {
        this.physicianRepository = physicianRepository;
    }

    public List<Physician> getAll() { return physicianRepository.findAll(); }

    public Physician getByID(int id) {
        Optional<Physician> physicianById = physicianRepository.findFirstById(id);
        if (physicianById.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Physician does not exist");
        }
        return physicianById.get();
    }
}
