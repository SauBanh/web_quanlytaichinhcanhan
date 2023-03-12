package b2c_eco.example.quanlytaichinhcanhan.Dept;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeptRepository extends JpaRepository<Dept, Long>{
    List<Dept> findByIdOrderByAddDateAsc(Long id);
    Dept findByIdAndIdD(Long id, Long idd);
    Dept findByIdD(Long idD);
}
