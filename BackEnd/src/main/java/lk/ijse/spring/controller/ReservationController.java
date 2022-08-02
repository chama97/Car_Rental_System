package lk.ijse.spring.controller;

import lk.ijse.spring.dto.ReservationDTO;
import lk.ijse.spring.service.ReservationService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RequestMapping("crs/reservation")
@RestController
@CrossOrigin
public class ReservationController {

    @Autowired
    ReservationService reservationService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllReservation() {
        return new ResponseUtil(200, "Ok", reservationService.getAllReservation());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveReservation(@RequestBody ReservationDTO reservationDTO) {
        System.out.println(reservationDTO.toString());
        reservationService.saveReservation(reservationDTO);
        return new ResponseUtil(200, "Save", null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateReservation(@RequestBody ReservationDTO reservationDTO) {
        reservationService.updateReservation(reservationDTO);
        return new ResponseUtil(200, "Updated", null);
    }

    @DeleteMapping(params = {"reserveId"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteReservation(@RequestParam String reserveId) {
        reservationService.deleteReservation(reserveId);
        return new ResponseUtil(200, "Deleted", null);
    }

    @GetMapping(path = "/{reserveId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchReservation(@PathVariable String reserveId) {
        return new ResponseUtil(200, "Ok", reservationService.searchReservation(reserveId));
    }

    @GetMapping(path = "/GenerateReservationID",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil generateReservationID() {
        return new ResponseUtil(200,"Ok",reservationService.generateReservationID());
    }
}
