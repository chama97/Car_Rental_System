package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class ReservationDTO {
    private String reserveId;
    private String pickUpDate;
    private String returnDate;
    private String pickUpLocation;
    private String status;
    private CustomerDTO customer;
    private CarDTO car;
    private String driverId;
    List<RentalDetailsDTO> rentalDetails;
}
