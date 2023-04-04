package b2c_eco.example.quanlytaichinhcanhan.Dept;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
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

    @NotNull(message = "can't be null!")
    private Long id;
    @NotNull(message = "can't be null!")
    private String name;
    @NotNull(message = "can't be null!")
    private Double value;
    private Double valuepertime;
    @NotNull(message = "can't be null!")
    private Date adddate;
    @Column(name="`desc`")
    private String desc;
}
