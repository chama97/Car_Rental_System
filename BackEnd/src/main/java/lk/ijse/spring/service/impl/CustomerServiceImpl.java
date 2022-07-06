package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveCustomer(CustomerDTO dto) {
        if (!repo.existsById(dto.getEmail())) {
            repo.save(mapper.map(dto, Customer.class));
        } else {
            throw new RuntimeException("Customer Already Exist..!");
        }
    }

    @Override
    public void deleteCustomer(String email) {
        if (repo.existsById(email)){
            repo.deleteById(email);
        }else{
            throw new RuntimeException("Please check the Customer Email.. No Such Customer..!");
        }
    }

    @Override
    public List<CustomerDTO> getAllCustomers() {
        return mapper.map(repo.findAll(), new TypeToken<List<CustomerDTO>>() {
        }.getType());
    }

    @Override
    public void updateCustomer(CustomerDTO dto) {
        if (repo.existsById(dto.getEmail())) {
            repo.save(mapper.map(dto, Customer.class));
        } else {
            throw new RuntimeException("No Such Customer To Update..! Please Check the Email..!");
        }
    }

    @Override
    public CustomerDTO searchCustomer(String email) {
        if (repo.existsById(email)){
            return mapper.map(repo.findById(email).get(), CustomerDTO.class);
        }else{
            throw new RuntimeException("No Customer For "+email+" ..!");
        }
    }
}
