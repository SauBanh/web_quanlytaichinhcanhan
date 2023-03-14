package b2c_eco.example.quanlytaichinhcanhan.Revenue;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
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
@RequestMapping("/api/revenue")
@RequiredArgsConstructor
public class RevenueController {
    
    @Autowired
    private final RevenueService revenueService;

    @GetMapping("/")
    public List<Revenue> getAllRevenues(Authentication authentication){
        return revenueService.getAllRevs(authentication);
    }

    @GetMapping("/{id}")
    public Revenue getRevenue(Authentication authentication, @PathVariable("id") Long id){
        return revenueService.getRevWithIdR(authentication, id);
    }

    @PostMapping("/")
    public Revenue addRevenue(@RequestBody Revenue revenue){
        return revenueService.createUserRev(revenue);
    }

    @PutMapping("/{id}")
    public Revenue changeRevenue(@PathVariable("id") Long id, Long uid, @RequestBody Revenue revenue){
        return revenueService.changeUserRev(id, uid, revenue);
    }

    @DeleteMapping("/{id}")
    public void deleteRevenue(Authentication authentication, @PathVariable("id") Long id, Long uid){
        revenueService.deleteRev(authentication, id, uid);
    }
}
