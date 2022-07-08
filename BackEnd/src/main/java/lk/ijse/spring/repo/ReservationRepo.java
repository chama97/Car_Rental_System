package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepo extends JpaRepository<Reservation, String> {
}
