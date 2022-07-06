package lk.ijse.spring.service;

import lk.ijse.spring.dto.LoginDTO;

import java.util.List;


public interface LoginService {

    void saveLogin(LoginDTO dto);

    void deleteLogin(String email);

    List<LoginDTO> getAllLogin();

    LoginDTO searchLogin(String email);

    void updateLogin(LoginDTO dto);
}
