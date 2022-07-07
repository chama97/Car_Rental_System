package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class CarDTO {
    private String regId;
    private String brand;
    private String type;
    private String transType;
    private String fuelType;
    private int noPassengers;
    private double dailyRate;
    private double monthlyRate;
    private int freeKmDay;
    private double priceExKm;
    private String status;
}
