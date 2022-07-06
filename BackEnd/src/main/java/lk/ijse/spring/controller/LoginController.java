package lk.ijse.spring.controller;

import lk.ijse.spring.dto.LoginDTO;
import lk.ijse.spring.service.LoginService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RequestMapping("crs/login")
@RestController
@CrossOrigin
public class LoginController {

    @Autowired
    LoginService loginService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllLogins() {
        return new ResponseUtil(200,"Ok",loginService.getAllLogin());
    }

    @ResponseStatus(HttpStatus.CREATED) //201
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveLogin(@ModelAttribute LoginDTO login) {
        loginService.saveLogin(login);
        return new ResponseUtil(200,"Save",null);
    }


    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateLogin(@RequestBody LoginDTO login) {
        loginService.updateLogin(login);
        return new ResponseUtil(200,"Updated",null);
    }

    @DeleteMapping(params = {"email"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteLogin(@RequestParam String email) {
        loginService.deleteLogin(email);
        return new ResponseUtil(200,"Deleted",null);
    }

    @GetMapping(path = "/{email}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchLogin(@PathVariable String email) {
        return new ResponseUtil(200,"Ok",loginService.searchLogin(email));
    }
}
