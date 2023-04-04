package b2c_eco.example.quanlytaichinhcanhan.Revenue;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "http://localhost:3009")
@RequestMapping("/api/revenue")
@RequiredArgsConstructor
public class RevenueController {
    
    @Autowired
    private final RevenueService revenueService;

    @GetMapping("/")
    public ResponseEntity<Object> getAllRevenues(Authentication authentication){
        // return revenueService.getAllRevs(authentication);
        ResponseEntity<Object> res;
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            map.put("status", "success");
            map.put("revenues", revenueService.getAllRevs(authentication));
            
            res = new ResponseEntity<Object>(map,HttpStatus.OK);
        } catch (Exception e) {
            map.clear();
            map.put("status", "fail");
            map.put("revenues", null);
            res = new ResponseEntity<Object>(map,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getRevenue(Authentication authentication, @PathVariable("id") Long id){
        // return revenueService.getRevWithIdR(authentication, id);
        ResponseEntity<Object> res;
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            map.put("status", "success");
            map.put("revenue", revenueService.getRevWithIdR(authentication, id));
            
            res = new ResponseEntity<Object>(map,HttpStatus.OK);
        } catch (Exception e) {
            map.clear();
            map.put("status", "fail");
            map.put("revenue", null);
            res = new ResponseEntity<Object>(map,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }

    @PostMapping("/")
    public ResponseEntity<Object> addRevenue(@RequestBody @Valid Revenue revenue){
        // return revenueService.createUserRev(revenue);
        ResponseEntity<Object> res;
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            map.put("status", "success");
            map.put("revenue", revenueService.createUserRev(revenue));
            
            res = new ResponseEntity<Object>(map,HttpStatus.OK);
        } catch (Exception e) {
            map.clear();
            map.put("status", "fail");
            map.put("revenue", null);
            res = new ResponseEntity<Object>(map,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }

    @PutMapping("/{id}/{uid}")
    public ResponseEntity<Object> changeRevenue(@PathVariable("id") Long id, @PathVariable("uid") Long uid, @RequestBody @Valid Revenue revenue){
        // return revenueService.changeUserRev(id, uid, revenue);
        ResponseEntity<Object> res;
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            map.put("status", "success");
            map.put("revenue", revenueService.changeUserRev(id, uid, revenue));
            
            res = new ResponseEntity<Object>(map,HttpStatus.OK);
        } catch (Exception e) {
            map.clear();
            map.put("status", "fail");
            map.put("revenue", null);
            res = new ResponseEntity<Object>(map,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }

    @DeleteMapping("/{id}/{uid}")
    public ResponseEntity<Object> deleteRevenue(Authentication authentication, @PathVariable("id") Long id, @PathVariable("uid") Long uid){
        ResponseEntity<Object> res;
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            revenueService.deleteRev(authentication, id, uid);
            map.put("status", "success");
            map.put("message", "deleted");
            
            res = new ResponseEntity<Object>(map,HttpStatus.OK);
        } catch (Exception e) {
            map.clear();
            map.put("status", "fail");
            map.put("message", null);
            res = new ResponseEntity<Object>(map,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }

    @GetMapping("/calc")
    public ResponseEntity<Object> getTopSeven(Authentication authentication){
        ResponseEntity<Object> res;
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            map.put("status", "success");
            map.put("data", revenueService.topSeven(authentication));
            
            res = new ResponseEntity<Object>(map,HttpStatus.OK);
        } catch (Exception e) {
            map.clear();
            map.put("status", "fail");
            map.put("data", null);
            res = new ResponseEntity<Object>(map,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }
}
