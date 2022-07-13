package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class CategoryDTO {
    private String regId;
    private String description;
    private MultipartFile frontView;
    private MultipartFile backView;
    private MultipartFile sideView;
    private MultipartFile interiorView;
}
