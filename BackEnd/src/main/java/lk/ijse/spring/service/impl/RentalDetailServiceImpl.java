package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.RentalDetailsDTO;
import lk.ijse.spring.dto.ReservationDTO;
import lk.ijse.spring.entity.RentalDetails;
import lk.ijse.spring.repo.RentalDetailsRepo;
import lk.ijse.spring.service.RentalDetailService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class RentalDetailServiceImpl implements RentalDetailService {

    @Autowired
    private RentalDetailsRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public List<RentalDetailsDTO> getAllRentalDetails() {
        return mapper.map(repo.findAll(), new TypeToken<List<RentalDetailsDTO>>() {
        }.getType());
    }

    @Override
    public void updateRentalDetails(RentalDetailsDTO dto) {
        if (repo.existsById(dto.getRentalId())) {
            repo.save(mapper.map(dto, RentalDetails.class));
        } else {
            throw new RuntimeException("No Such RentalId To Update..! Please Check the Id..!");
        }
    }

    @Override
    public RentalDetailsDTO searchRentalDetails(String rentalId) {
        if (repo.existsById(rentalId)){
            return mapper.map(repo.findById(rentalId).get(), RentalDetailsDTO.class);
        }else{
            throw new RuntimeException("No Customer For "+rentalId+" ..!");
        }
    }
}
