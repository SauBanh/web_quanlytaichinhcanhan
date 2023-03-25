package b2c_eco.example.quanlytaichinhcanhan.Category;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "http://localhost:3009")
@RequestMapping("/api/category")
@RequiredArgsConstructor
public class CategoryController {

    @Autowired
    private final CategoryRepository categoryRepository;
    
    @GetMapping("/{id}")
    public ResponseEntity<Object> getCatergoryName(@PathVariable("id") Long id){
        ResponseEntity<Object> res;
        // return categoryRepository.findByIdc(id).getName();
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            map.put("status", "success");
            map.put("CategoryName", categoryRepository.findByIdc(id).getName());
            
            res = new ResponseEntity<Object>(map,HttpStatus.OK);
        } catch (Exception e) {
            map.clear();
            map.put("status", "fail");
            map.put("CategoryName", null);
            res = new ResponseEntity<Object>(map,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }

    @GetMapping("/")
    public ResponseEntity<Object> getAllCatergories(){
        ResponseEntity<Object> res;
        // return categoryRepository.findByIdc(id).getName();
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            map.put("status", "success");
            map.put("AllCategories", categoryRepository.findAll());
            
            res = new ResponseEntity<Object>(map,HttpStatus.OK);
        } catch (Exception e) {
            map.clear();
            map.put("status", "fail");
            map.put("AllCategories", null);
            res = new ResponseEntity<Object>(map,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }

    // @PostMapping("/")
    // public Category addRevenue(@RequestBody Category category){
    //     return categoryRepository.save(category);
    // }

}
