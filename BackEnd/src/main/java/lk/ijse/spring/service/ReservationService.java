package lk.ijse.spring.service;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.dto.ReservationDTO;

import java.util.List;

public interface ReservationService {

    void saveReservation(ReservationDTO dto);

    void applyReservation(ReservationDTO dto);

    void deleteReservation(String reserveId);

    List<ReservationDTO> getAllReservation();

    void updateReservation(ReservationDTO dto);

    ReservationDTO searchReservation(String reserveId);
}
