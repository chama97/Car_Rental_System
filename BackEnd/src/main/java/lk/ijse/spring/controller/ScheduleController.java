package lk.ijse.spring.controller;

import lk.ijse.spring.dto.ScheduleDTO;
import lk.ijse.spring.service.ScheduleService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RequestMapping("crs/schedule")
@RestController
@CrossOrigin
public class ScheduleController {

    @Autowired
    ScheduleService scheduleService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllCustomers() {
        return new ResponseUtil(200,"Ok",scheduleService.getAllSchedules());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveCustomer(@RequestBody ScheduleDTO schedule) {
        scheduleService.saveSchedule(schedule);
        return new ResponseUtil(200,"Save",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateCustomer(@RequestBody ScheduleDTO schedule) {
        scheduleService.updateSchedule(schedule);
        return new ResponseUtil(200,"Updated",null);
    }

    @DeleteMapping(params = {"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteCustomer(@RequestParam String id) {
        scheduleService.deleteSchedule(id);
        return new ResponseUtil(200,"Deleted",null);
    }

    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchCustomer(@PathVariable String id) {
        return new ResponseUtil(200,"Ok",scheduleService.searchSchedule(id));
    }
}
