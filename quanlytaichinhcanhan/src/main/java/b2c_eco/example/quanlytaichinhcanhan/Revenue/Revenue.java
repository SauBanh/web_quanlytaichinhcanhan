package b2c_eco.example.quanlytaichinhcanhan.Revenue;

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
@Table(name="revenue")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Revenue {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long idr;

    @NotNull(message = "can't be null!")
    private Long id;
    @NotNull(message = "can't be null!")
    private String name;
    @NotNull(message = "can't be null!")
    private Double value;
    @NotNull(message = "can't be null!")
    private Date adddate;
    @Column(name="`desc`")
    private String desc;
}
