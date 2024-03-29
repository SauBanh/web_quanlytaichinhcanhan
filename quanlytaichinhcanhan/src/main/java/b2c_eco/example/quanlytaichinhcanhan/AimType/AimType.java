package b2c_eco.example.quanlytaichinhcanhan.AimType;

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
@Table(name="aim_type")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AimType {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ida;

    @NotNull(message = "can't be null!")
    private String name;
}
