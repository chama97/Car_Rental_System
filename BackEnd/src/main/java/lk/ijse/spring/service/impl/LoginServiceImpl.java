package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.LoginDTO;
import lk.ijse.spring.entity.Login;
import lk.ijse.spring.repo.LoginRepo;
import lk.ijse.spring.service.LoginService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class LoginServiceImpl implements LoginService {

    @Autowired
    private LoginRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveLogin(LoginDTO dto) {
        if (!repo.existsById(dto.getEmail())) {
            repo.save(mapper.map(dto, Login.class));
        } else {
            throw new RuntimeException("Login User Already Exist..!");
        }
    }

    @Override
    public void deleteLogin(String email) {
        if (repo.existsById(email)){
            repo.deleteById(email);
        }else{
            throw new RuntimeException("Please check the email. No Such User..!");
        }
    }

    @Override
    public List<LoginDTO> getAllLogin() {
        return mapper.map(repo.findAll(), new TypeToken<List<LoginDTO>>() {
        }.getType());
    }

    @Override
    public LoginDTO searchLogin(String email) {
        if (repo.existsById(email)){
            return mapper.map(repo.findById(email).get(), LoginDTO.class);
        }else{
            throw new RuntimeException("No User For "+email+" ..!");
        }
    }

    @Override
    public void updateLogin(LoginDTO dto) {
        if (repo.existsById(dto.getEmail())) {
            repo.save(mapper.map(dto, Login.class));
        } else {
            throw new RuntimeException("No Such User To Update..! Please Check the Email..!");
        }
    }
}
