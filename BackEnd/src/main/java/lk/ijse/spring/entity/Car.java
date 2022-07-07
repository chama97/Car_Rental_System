package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class Car {
    @Id
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

    @OneToMany(mappedBy = "car", cascade = CascadeType.ALL)
    private List<Reservation> reservations;

    @OneToMany(mappedBy = "car", cascade = CascadeType.ALL)
    private List<Category> categories;
}
