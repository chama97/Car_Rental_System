package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.repo.DriverRepo;
import lk.ijse.spring.service.DriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {

    @Autowired
    private DriverRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveDriver(DriverDTO dto) {
        if (!repo.existsById(dto.getEmail())) {
            repo.save(mapper.map(dto, Driver.class));
        } else {
            throw new RuntimeException("Driver Already Exist..!");
        }
    }

    @Override
    public void deleteDriver(String email) {
        if (repo.existsById(email)){
            repo.deleteById(email);
        }else{
            throw new RuntimeException("Please check the Driver Email.. No Such Driver..!");
        }
    }

    @Override
    public List<DriverDTO> getAllDrivers() {
        return mapper.map(repo.findAll(), new TypeToken<List<DriverDTO>>() {
        }.getType());
    }

    @Override
    public void updateDriver(DriverDTO dto) {
        if (repo.existsById(dto.getEmail())) {
            repo.save(mapper.map(dto, Driver.class));
        } else {
            throw new RuntimeException("No Such Driver To Update..! Please Check the Email..!");
        }
    }

    @Override
    public DriverDTO searchDriver(String email) {
        if (repo.existsById(email)){
            return mapper.map(repo.findById(email).get(), DriverDTO.class);
        }else{
            throw new RuntimeException("No Driver For "+email+" ..!");
        }
    }
}
