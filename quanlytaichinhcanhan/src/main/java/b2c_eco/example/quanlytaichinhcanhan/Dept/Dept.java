package b2c_eco.example.quanlytaichinhcanhan.Dept;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Dept {
    @Id
    @GeneratedValue
    private Long idD;

    private Long id;
    private String name;
    private Float value;
    private Float valuePerTime;
    private Date addDate;
    private String desc;
}
