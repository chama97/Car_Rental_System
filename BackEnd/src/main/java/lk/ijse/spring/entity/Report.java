package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class Report {
    @Id
    private String rentalId;
    private double rentalCharge;
    private double damageCharge;
    private double additionalCharge;
    private double totalCharge;
}
