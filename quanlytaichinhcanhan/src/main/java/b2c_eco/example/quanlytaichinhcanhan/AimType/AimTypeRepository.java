package b2c_eco.example.quanlytaichinhcanhan.AimType;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AimTypeRepository extends JpaRepository<AimType, Long>{
    AimType findByIda(Long ida);
}
