package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class Schedule {
    @Id
    private String id;
    private LocalDate startDate;
    private LocalDate endDate;

    @ManyToOne(cascade = {CascadeType.DETACH,CascadeType.REFRESH})
    @JoinColumn(name = "driverNic",referencedColumnName = "nic")
    private Driver driver;

    @OneToMany(mappedBy = "schedule", cascade = CascadeType.ALL)
    private List<Reservation> reservations;
}