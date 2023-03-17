package b2c_eco.example.quanlytaichinhcanhan.Target;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "http://localhost:3009")
@RequestMapping("/api/target")
@RequiredArgsConstructor
public class TargetController {
    @Autowired
    private final TargetService targetService;

    @GetMapping("/")
    public List<Target> getAllRevenues(Authentication authentication){
        return targetService.getAllTars(authentication);
    }

    @GetMapping("/{id}")
    public Target getRevenue(Authentication authentication, @PathVariable("id") Long id){
        return targetService.getTarWithIdt(authentication, id);
    }

    @PostMapping("/")
    public Target addRevenue(@RequestBody Target target){
        return targetService.createUserTar(target);
    }

    @PutMapping("/{id}")
    public Target changeRevenue(@PathVariable("id") Long id, Long uid, @RequestBody Target target){
        return targetService.changeUserTar(id, uid, target);
    }

    @DeleteMapping("/{id}")
    public void deleteRevenue(Authentication authentication, @PathVariable("id") Long id, Long uid){
        targetService.deleteTar(authentication, id, uid);
    }
}