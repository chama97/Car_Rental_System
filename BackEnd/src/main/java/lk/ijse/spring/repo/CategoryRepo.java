package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepo extends JpaRepository<Category, String> {
}
