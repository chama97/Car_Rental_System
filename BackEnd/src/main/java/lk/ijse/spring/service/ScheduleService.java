package lk.ijse.spring.service;

import lk.ijse.spring.dto.ScheduleDTO;

import java.util.List;

public interface ScheduleService {

    void saveSchedule(ScheduleDTO dto);

    void deleteSchedule(String id);

    List<ScheduleDTO> getAllSchedules();

    void updateSchedule(ScheduleDTO dto);

    ScheduleDTO searchSchedule(String id);
}
