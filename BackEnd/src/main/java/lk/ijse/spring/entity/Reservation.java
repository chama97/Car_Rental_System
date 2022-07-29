package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class Reservation {
    @Id
    private String reserveId;
    private String pickUpDate;
    private String returnDate;
    private String pickUpLocation;
    private String status;

    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "customerID",referencedColumnName = "email",nullable = false)
    private Customer customer;

    @ManyToOne(cascade = {CascadeType.DETACH,CascadeType.REFRESH})
    @JoinColumn(name = "carID",referencedColumnName = "regId",nullable = false)
    private Car car;

    @ManyToOne(cascade = {CascadeType.DETACH,CascadeType.REFRESH})
    @JoinColumn(name = "driverId",referencedColumnName = "email")
    private Driver driver;

    @OneToMany(mappedBy = "reservation",cascade = CascadeType.ALL)
    private List<RentalDetails> rentalDetails;

}
