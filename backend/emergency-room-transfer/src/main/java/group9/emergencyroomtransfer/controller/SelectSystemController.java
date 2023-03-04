package group9.emergencyroomtransfer.controller;

import group9.emergencyroomtransfer.model.system.System;
import group9.emergencyroomtransfer.service.SelectSystemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/systems")
public class SelectSystemController {

    private final SelectSystemService selectSystemService;

    @Autowired
    public SelectSystemController(SelectSystemService selectSystemService) {
        this.selectSystemService = selectSystemService;
    }

    @GetMapping
    public List<System> getAllSystems() {
        return selectSystemService.getAll();
    }

}
