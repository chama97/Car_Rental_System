package lk.ijse.spring.service;

import lk.ijse.spring.dto.DriverDTO;

import java.util.List;

public interface DriverService {

    void saveDriver(DriverDTO dto);

    void deleteDriver(String email);

    List<DriverDTO> getAllDrivers();

    void updateDriver(DriverDTO dto);

    DriverDTO searchDriver(String email);
}
