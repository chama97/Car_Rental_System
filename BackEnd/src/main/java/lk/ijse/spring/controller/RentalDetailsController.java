package lk.ijse.spring.controller;

import lk.ijse.spring.dto.RentalDetailsDTO;
import lk.ijse.spring.service.RentalDetailService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RequestMapping("crs/rental")
@RestController
@CrossOrigin
public class RentalDetailsController {

    @Autowired
    RentalDetailService rentalDetailService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllRentalDetails() {
        return new ResponseUtil(200, "Ok", rentalDetailService.getAllRentalDetails());
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateRentalDetails(@RequestBody RentalDetailsDTO rentalDetailsDTO) {
        rentalDetailService.updateRentalDetails(rentalDetailsDTO);
        return new ResponseUtil(200, "Updated", null);
    }

    @GetMapping(path = "/{rentalId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchRentalDetails(@PathVariable String rentalId) {
        return new ResponseUtil(200, "Ok", rentalDetailService.searchRentalDetails(rentalId));
    }
}
