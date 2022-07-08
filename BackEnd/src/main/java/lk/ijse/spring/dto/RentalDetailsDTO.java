package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class RentalDetailsDTO {
    private String rentalId;
    private double rentalCharge;
    private double damageCharge;
    private double additionalCharge;
    private int duration;
    private double totalCharge;
}
