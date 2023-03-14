package b2c_eco.example.quanlytaichinhcanhan.Spending;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpendingRepository extends JpaRepository<Spending, Long>{
    List<Spending> findAllById(Long id);
    Spending findByIdAndIds(Long id, Long ids);
}
