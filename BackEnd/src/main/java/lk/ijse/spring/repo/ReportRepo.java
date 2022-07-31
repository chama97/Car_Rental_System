package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Report;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReportRepo extends JpaRepository<Report, String> {
}
