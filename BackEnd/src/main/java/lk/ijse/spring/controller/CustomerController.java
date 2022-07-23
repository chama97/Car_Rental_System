package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RequestMapping("crs/customer")
@RestController
@CrossOrigin
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllCustomers() {
        return new ResponseUtil(200,"Ok",customerService.getAllCustomers());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveCustomer(@RequestBody CustomerDTO customer) {
        customerService.saveCustomer(customer);
        return new ResponseUtil(200,"Save",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateCustomer(@RequestBody CustomerDTO customer) {
        customerService.updateCustomer(customer);
        return new ResponseUtil(200,"Updated",null);
    }

    @DeleteMapping(params = {"email"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteCustomer(@RequestParam String email) {
        customerService.deleteCustomer(email);
        return new ResponseUtil(200,"Deleted",null);
    }

    @GetMapping(path = "/{email}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchCustomer(@PathVariable String email) {
        return new ResponseUtil(200,"Ok",customerService.searchCustomer(email));
    }
}
