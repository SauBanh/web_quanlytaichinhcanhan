package b2c_eco.example.quanlytaichinhcanhan.AimType;

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
@RequestMapping("/api/type")
@RequiredArgsConstructor
public class AimTypeController {
    
    @Autowired
    private final AimTypeRepository aimTypeRepository;

    @GetMapping("/{id}")
    public ResponseEntity<Object> getTypeName(@PathVariable("id") Long id){
        ResponseEntity<Object> res;
        // return categoryRepository.findByIdc(id).getName();
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            map.put("status", "success");
            map.put("AimTypeName", aimTypeRepository.findByIda(id).getName());
            
            res = new ResponseEntity<Object>(map,HttpStatus.OK);
        } catch (Exception e) {
            map.clear();
            map.put("status", "fail");
            map.put("AimTypeName", null);
            res = new ResponseEntity<Object>(map,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }

    @GetMapping("/")
    public ResponseEntity<Object> getAllTypeNames(){
        ResponseEntity<Object> res;
        // return categoryRepository.findByIdc(id).getName();
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            map.put("status", "success");
            map.put("AllAimTypes", aimTypeRepository.findAll());
            
            res = new ResponseEntity<Object>(map,HttpStatus.OK);
        } catch (Exception e) {
            map.clear();
            map.put("status", "fail");
            map.put("AllAimTypes", null);
            res = new ResponseEntity<Object>(map,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }

    // @PostMapping("/")
    // public AimType addRevenue(@RequestBody AimType aimType){
    //     return aimTypeRepository.save(aimType);
    // }

}
