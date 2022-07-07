package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class Category {
    @Id
    private String regId;
    private String description;
    private String frontView;
    private String backView;
    private String sideView;
    private String interiorView;

    @ManyToOne
    @JoinColumn(name = "regId",referencedColumnName = "regId",insertable = false,updatable = false)
    private Car car;

}
