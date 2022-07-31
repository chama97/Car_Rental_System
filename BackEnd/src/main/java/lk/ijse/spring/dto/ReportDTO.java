package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class ReportDTO {
    private String rentalId;
    private String payDate;
    private double rentalCharge;
    private double damageCharge;
    private double additionalCharge;
    private double totalCharge;
}
