package b2c_eco.example.quanlytaichinhcanhan.Spending;

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
@RequestMapping("/api/spending")
@RequiredArgsConstructor
public class SpendingController {

    @Autowired
    private final SpendingService spendingService;

    @GetMapping("/")
    public List<Spending> getAllRevenues(Authentication authentication){
        return spendingService.getAllSpds(authentication);
    }

    @GetMapping("/{id}")
    public Spending getRevenue(Authentication authentication, @PathVariable("id") Long id){
        return spendingService.getSpdWithIds(authentication, id);
    }

    @PostMapping("/")
    public Spending addRevenue(@RequestBody Spending spending){
        return spendingService.createUserSpd(spending);
    }

    @PutMapping("/{id}")
    public Spending changeRevenue(@PathVariable("id") Long id, Long uid, @RequestBody Spending spending){
        return spendingService.changeUserSpd(id, uid, spending);
    }

    @DeleteMapping("/{id}")
    public void deleteRevenue(Authentication authentication, @PathVariable("id") Long id, Long uid){
        spendingService.deleteSpd(authentication, id, uid);
    }
}
