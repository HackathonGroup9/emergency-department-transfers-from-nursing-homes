package group9.emergencyroomtransfer.controller;

import group9.emergencyroomtransfer.model.physician.Physician;
import group9.emergencyroomtransfer.service.PhysicianService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/physicians")
public class PhysicianController {

    private final PhysicianService physicianService;

    @Autowired
    public PhysicianController(PhysicianService physicianService) {
        this.physicianService = physicianService;
    }

    @GetMapping
    public List<Physician> getAllPhysicians() {
        return physicianService.getAll();
    }

    @GetMapping(path = "{id}")
    public Physician getPhysicianById(@PathVariable int id) {
        return physicianService.getByID(id);
    }

}
