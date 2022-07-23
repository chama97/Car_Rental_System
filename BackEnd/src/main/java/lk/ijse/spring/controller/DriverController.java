package lk.ijse.spring.controller;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.service.DriverService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RequestMapping("crs/driver")
@RestController
@CrossOrigin
public class DriverController {

    @Autowired
    DriverService driverService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllDrivers() {
        return new ResponseUtil(200,"Ok",driverService.getAllDrivers());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveDriver(@RequestBody DriverDTO driver) {
        driverService.saveDriver(driver);
        return new ResponseUtil(200,"Save",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateDriver(@RequestBody DriverDTO driver) {
        driverService.updateDriver(driver);
        return new ResponseUtil(200,"Updated",null);
    }

    @DeleteMapping(params = {"email"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteDriver(@RequestParam String email) {
        driverService.deleteDriver(email);
        return new ResponseUtil(200,"Deleted",null);
    }

    @GetMapping(path = "/{email}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchDriver(@PathVariable String email) {
        return new ResponseUtil(200,"Ok",driverService.searchDriver(email));
    }
}
