package b2c_eco.example.quanlytaichinhcanhan.Spending;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface SpendingRepository extends JpaRepository<Spending, Long>{
    List<Spending> findAllById(Long id);
    Spending findByIdAndIds(Long id, Long ids);
    @Query(nativeQuery = true, value="SELECT category.name, SUM(spending.value) as value FROM (SELECT * FROM spending WHERE spending.id= ?1 ) spending INNER JOIN category ON spending.idc=category.idc GROUP BY category.name")
    List<Object> sumSpendingValueByCategory(Long id);
}
