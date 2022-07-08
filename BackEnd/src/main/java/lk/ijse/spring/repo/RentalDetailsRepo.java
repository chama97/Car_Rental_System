package lk.ijse.spring.repo;

import lk.ijse.spring.entity.RentalDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentalDetailsRepo extends JpaRepository<RentalDetails, String> {
}
