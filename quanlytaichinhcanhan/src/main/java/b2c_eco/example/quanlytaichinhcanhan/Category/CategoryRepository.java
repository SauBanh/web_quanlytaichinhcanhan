package b2c_eco.example.quanlytaichinhcanhan.Category;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long>{
    Category findByIdc(Long idc);
}
