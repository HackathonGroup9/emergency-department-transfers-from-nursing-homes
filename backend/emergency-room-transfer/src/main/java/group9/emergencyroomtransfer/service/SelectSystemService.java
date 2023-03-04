package group9.emergencyroomtransfer.service;

import group9.emergencyroomtransfer.model.system.System;
import group9.emergencyroomtransfer.model.system.SystemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SelectSystemService {

    private final SystemRepository systemRepository;

    @Autowired
    public SelectSystemService(SystemRepository systemRepository) {
        this.systemRepository = systemRepository;
    }

    public List<System> getAll() {
        return systemRepository.findAll();
    }
}
