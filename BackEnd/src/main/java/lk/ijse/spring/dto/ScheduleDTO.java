package lk.ijse.spring.dto;

import lk.ijse.spring.entity.Driver;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class ScheduleDTO {
    private String id;
    private LocalDate startDate;
    private LocalDate endDate;
    private Driver driverNic;
}
