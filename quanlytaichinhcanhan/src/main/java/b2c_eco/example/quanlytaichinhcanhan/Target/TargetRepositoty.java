package b2c_eco.example.quanlytaichinhcanhan.Target;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TargetRepositoty extends JpaRepository<Target, Long>{
    List<Target> findAllById(Long id);
    Target findByIdAndIdt(Long id, Long idt);
}
