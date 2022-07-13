package lk.ijse.spring.service;

import lk.ijse.spring.dto.RentalDetailsDTO;
import lk.ijse.spring.dto.ReservationDTO;

import java.util.List;

public interface RentalDetailService {

    List<RentalDetailsDTO> getAllRentalDetails();

    void purchaseRentalDetails(RentalDetailsDTO dto);

    RentalDetailsDTO searchRentalDetails(String rentalId);
}
