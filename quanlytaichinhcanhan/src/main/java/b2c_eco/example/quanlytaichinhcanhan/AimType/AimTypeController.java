package b2c_eco.example.quanlytaichinhcanhan.AimType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/type")
@RequiredArgsConstructor
public class AimTypeController {
    
    @Autowired
    private final AimTypeRepository aimTypeRepository;

    @GetMapping("/{id}")
    public String getTypeName(@PathVariable("id") Long id){
        return aimTypeRepository.findByIda(id).getName();
    }

    // @PostMapping("/")
    // public AimType addRevenue(@RequestBody AimType aimType){
    //     return aimTypeRepository.save(aimType);
    // }

}
