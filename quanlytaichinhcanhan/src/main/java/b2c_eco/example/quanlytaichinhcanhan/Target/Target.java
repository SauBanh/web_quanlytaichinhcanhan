package b2c_eco.example.quanlytaichinhcanhan.Target;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="target")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Target {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idt;
    
    private Long id;
    private Long ida;
    private String name;
    private Long value;

}
