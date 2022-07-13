package lk.ijse.spring.service;




import lk.ijse.spring.dto.CategoryDTO;

import java.util.List;

public interface CategoryService {

    void saveCategory(CategoryDTO dto);

    void deleteCategory(String regId);

    List<CategoryDTO> getAllCategory();

    void updateCategory(CategoryDTO dto);

    CategoryDTO searchCategory(String regId);
}
