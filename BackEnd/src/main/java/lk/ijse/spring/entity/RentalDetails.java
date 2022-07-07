package lk.ijse.spring.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class RentalDetails {
    @Id
    private String rentalId;
    private double rentalCharge;
    private double damageCharge;
    private double additionalCharge;
    private int duration;
    private double totalCharge;

    @ManyToOne
    @JoinColumn(name = "rentalId",referencedColumnName = "reserveId",insertable = false,updatable = false)
    private Reservation reservation;
}
