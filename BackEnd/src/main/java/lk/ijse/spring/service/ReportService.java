package lk.ijse.spring.service;

import lk.ijse.spring.dto.ReportDTO;
import lk.ijse.spring.dto.ReservationDTO;

import java.util.List;

public interface ReportService {
    void saveReport(ReportDTO dto);

    void deleteReport(String rentalId);

    List<ReportDTO> getAllReport();

    ReportDTO searchReport(String rentalId);
}
