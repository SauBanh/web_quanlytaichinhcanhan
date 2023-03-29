package b2c_eco.example.quanlytaichinhcanhan.Revenue;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface RevenueRepository extends JpaRepository<Revenue, Long>{
    List<Revenue> findAllById(Long id);
    Revenue findByIdAndIdr(Long id, Long idr);
    @Query(nativeQuery = true, value="SELECT * FROM revenue WHERE revenue.id = ?1 ORDER BY revenue.idr DESC LIMIT 7")
    List<Revenue> getTop7Recent(Long id);
}
