package b2c_eco.example.quanlytaichinhcanhan.Dept;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "dept")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Dept {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long idd;

    private Long id;
    private String name;
    private Double value;
    private Double valuepertime;
    private Date adddate;
    @Column(name="`desc`")
    private String description;
}
