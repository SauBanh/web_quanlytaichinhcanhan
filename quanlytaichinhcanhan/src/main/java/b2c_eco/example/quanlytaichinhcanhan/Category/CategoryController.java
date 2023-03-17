package b2c_eco.example.quanlytaichinhcanhan.Category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "http://localhost:3009")
@RequestMapping("/api/catergory")
@RequiredArgsConstructor
public class CategoryController {

    @Autowired
    private final CategoryRepository categoryRepository;
    
    @GetMapping("/{id}")
    public String getCatergoryName(@PathVariable("id") Long id){
        return categoryRepository.findByIdc(id).getName();
    }

    // @PostMapping("/")
    // public Category addRevenue(@RequestBody Category category){
    //     return categoryRepository.save(category);
    // }

}
