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
public class Driver {
    @Id
    private String email;
    private String password;
    private String name;
    private String nic;
    private String license;
    private String address;
    private int contact;

    @OneToMany(mappedBy = "driver", cascade = CascadeType.ALL)
    private List<Schedule> schedules;
}
