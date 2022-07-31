package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.ReportDTO;
import lk.ijse.spring.entity.Report;
import lk.ijse.spring.repo.ReportRepo;
import lk.ijse.spring.service.ReportService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ReportServiceImpl implements ReportService {

    @Autowired
    private ReportRepo repo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveReport(ReportDTO dto) {
        if (!repo.existsById(dto.getRentalId())) {
            repo.save(mapper.map(dto, Report.class));
        } else {
            throw new RuntimeException("Report Already Exist..!");
        }
    }

    @Override
    public void deleteReport(String rentalId) {
        if (repo.existsById(rentalId)){
            repo.deleteById(rentalId);
        }else{
            throw new RuntimeException("Please check the Report Id.. No Such Report..!");
        }
    }

    @Override
    public List<ReportDTO> getAllReport() {
        return mapper.map(repo.findAll(), new TypeToken<List<ReportDTO>>() {
        }.getType());
    }

    @Override
    public ReportDTO searchReport(String rentalId) {
        if (repo.existsById(rentalId)){
            return mapper.map(repo.findById(rentalId).get(), ReportDTO.class);
        }else{
            throw new RuntimeException("No Report For "+rentalId+" ..!");
        }
    }
}
