package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.ReservationDTO;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.entity.Reservation;
import lk.ijse.spring.repo.CarRepo;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.repo.ReservationRepo;
import lk.ijse.spring.service.ReservationService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ReservationServiceImpl implements ReservationService {

    @Autowired
    private ReservationRepo reservationRepo;

    @Autowired
    private CarRepo carRepo;


    @Autowired
    private CustomerRepo customerRepo;


    @Autowired
    private ModelMapper mapper;

    @Override
    public void applyReservation(ReservationDTO dto) {
        if (!reservationRepo.existsById(dto.getReserveId())) {
            reservationRepo.save(mapper.map(dto, Reservation.class));
        } else {
            throw new RuntimeException("Reservation Already Exist..!");
        }
    }

    @Override
    public void saveReservation(ReservationDTO dto) {
        Reservation reserve = mapper.map(dto, Reservation.class);
        if (!reservationRepo.existsById(dto.getReserveId())) {
            reservationRepo.save(reserve);

            Car car = carRepo.findById(reserve.getCar().getRegId()).get();
            car.setStatus("Not Available");
            carRepo.save(car);

        } else {
            throw new RuntimeException("Reservation Failed..!, Reserve ID " + dto.getReserveId() + " Already Exist.!");
        }
    }

    @Override
    public void deleteReservation(String reserveId) {
        if (reservationRepo.existsById(reserveId)) {
            reservationRepo.deleteById(reserveId);
        } else {
            throw new RuntimeException("Delete Reservation Failed..!, Reserve ID " + reserveId + " Not Exist..!");
        }
    }

    @Override
    public List<ReservationDTO> getAllReservation() {
        return mapper.map(reservationRepo.findAll(), new TypeToken<List<ReservationDTO>>() {
        }.getType());
    }

    @Override
    public void updateReservation(ReservationDTO dto) {
        if (reservationRepo.existsById(dto.getReserveId())) {
            Reservation reservation = mapper.map(dto, Reservation.class);
            if (dto.getRentalDetails().size() < 1) throw new RuntimeException("No Cars added for the Reservation..!");

            reservationRepo.deleteById(dto.getReserveId());
            reservationRepo.save(reservation);
        } else {
            throw new RuntimeException("Update Reservation Failed..!, Reserve ID " + dto.getReserveId() + " Not Exist.!");
        }
    }

    @Override
    public ReservationDTO searchReservation(String reserveId) {
        if (reservationRepo.existsById(reserveId)) {
            return mapper.map(reservationRepo.findById(reserveId), ReservationDTO.class);
        } else {
            throw new RuntimeException("Search Reservation Failed..!, Reserve ID " + reserveId + " Not Exist.!");
        }
    }

    @Override
    public String generateReservationID() {
        Reservation top = reservationRepo.findTopByOrderByReserveIdDesc();
        if(top!=null){
            Integer index = Integer.parseInt(top.getReserveId().split("-")[1]);
            ++index;
            return index<10 ? "R-00"+index : index<100 ? "R-0"+index :"R-"+index;
        }
        return "R-001";
    }
}
