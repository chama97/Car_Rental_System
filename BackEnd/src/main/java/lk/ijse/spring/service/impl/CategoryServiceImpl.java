package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CategoryDTO;
import lk.ijse.spring.entity.Category;
import lk.ijse.spring.repo.CategoryRepo;
import lk.ijse.spring.service.CategoryService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepo categoryRepo;

    @Autowired
    private ModelMapper mapper;


    @Override
    public void saveCategory(CategoryDTO dto) {
        if (!categoryRepo.existsById(dto.getRegId())) {
            categoryRepo.save(mapper.map(dto, Category.class));
        } else {
            throw new RuntimeException("Car Already Exist..!");
        }
    }

    @Override
    public void deleteCategory(String regId) {
        if (categoryRepo.existsById(regId)){
            categoryRepo.deleteById(regId);
        }else{
            throw new RuntimeException("Please check the Car Register Number.. No Such Car..!");
        }
    }

    @Override
    public List<CategoryDTO> getAllCategory() {
        return mapper.map(categoryRepo.findAll(), new TypeToken<List<CategoryDTO>>() {
        }.getType());
    }

    @Override
    public void updateCategory(CategoryDTO dto) {
        if (categoryRepo.existsById(dto.getRegId())) {
            categoryRepo.save(mapper.map(dto, Category.class));
        } else {
            throw new RuntimeException("No Such Car To Update..! Please Check the RegId..!");
        }
    }

    @Override
    public CategoryDTO searchCategory(String regId) {
        if (categoryRepo.existsById(regId)){
            return mapper.map(categoryRepo.findById(regId).get(), CategoryDTO.class);
        }else{
            throw new RuntimeException("No Car For "+regId+" ..!");
        }
    }
}
