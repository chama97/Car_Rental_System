package lk.ijse.spring.controller;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.dto.ReportDTO;
import lk.ijse.spring.service.ReportService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RequestMapping("crs/report")
@RestController
@CrossOrigin
public class ReportController {

    @Autowired
    ReportService reportService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllReports() {
        return new ResponseUtil(200,"Ok",reportService.getAllReport());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveReport(@RequestBody ReportDTO report) {
        reportService.saveReport(report);
        return new ResponseUtil(200,"Save",null);
    }

    @GetMapping(path = "/{rentalId}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchReport(@PathVariable String rentalId) {
        return new ResponseUtil(200,"Ok",reportService.searchReport(rentalId));
    }
}
