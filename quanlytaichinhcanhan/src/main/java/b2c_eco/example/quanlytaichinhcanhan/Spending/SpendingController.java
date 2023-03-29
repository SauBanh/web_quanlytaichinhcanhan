package b2c_eco.example.quanlytaichinhcanhan.Spending;

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

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "http://localhost:3009")
@RequestMapping("/api/spending")
@RequiredArgsConstructor
public class SpendingController {

    @Autowired
    private final SpendingService spendingService;

    @GetMapping("/")
    public ResponseEntity<Object> getAllSpendings(Authentication authentication){
        // return spendingService.getAllSpds(authentication);
        ResponseEntity<Object> res;
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            map.put("status", "success");
            map.put("spendings", spendingService.getAllSpds(authentication));
            
            res = new ResponseEntity<Object>(map,HttpStatus.OK);
        } catch (Exception e) {
            map.clear();
            map.put("status", "fail");
            map.put("spendings", null);
            res = new ResponseEntity<Object>(map,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getSpending(Authentication authentication, @PathVariable("id") Long id){
        // return spendingService.getSpdWithIds(authentication, id);
        ResponseEntity<Object> res;
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            map.put("status", "success");
            map.put("spending", spendingService.getSpdWithIds(authentication, id));
            
            res = new ResponseEntity<Object>(map,HttpStatus.OK);
        } catch (Exception e) {
            map.clear();
            map.put("status", "fail");
            map.put("spending", null);
            res = new ResponseEntity<Object>(map,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }

    @PostMapping("/")
    public ResponseEntity<Object> addSpending(@RequestBody Spending spending){
        // return spendingService.createUserSpd(spending);
        ResponseEntity<Object> res;
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            map.put("status", "success");
            map.put("spending", spendingService.createUserSpd(spending));
            
            res = new ResponseEntity<Object>(map,HttpStatus.OK);
        } catch (Exception e) {
            map.clear();
            map.put("status", "fail");
            map.put("spending", null);
            res = new ResponseEntity<Object>(map,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }

    @PutMapping("/{id}/{uid}")
    public ResponseEntity<Object> changeSpending(@PathVariable("id") Long id, @PathVariable("uid") Long uid, @RequestBody Spending spending){
        // return spendingService.changeUserSpd(id, uid, spending);
        ResponseEntity<Object> res;
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            map.put("status", "success");
            map.put("spending", spendingService.changeUserSpd(id, uid, spending));
            
            res = new ResponseEntity<Object>(map,HttpStatus.OK);
        } catch (Exception e) {
            map.clear();
            map.put("status", "fail");
            map.put("spending", null);
            res = new ResponseEntity<Object>(map,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }

    @DeleteMapping("/{id}/{uid}")
    public ResponseEntity<Object> deleteSpending(Authentication authentication, @PathVariable("id") Long id, @PathVariable("uid") Long uid){
        ResponseEntity<Object> res;
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            spendingService.deleteSpd(authentication, id, uid);
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
    public ResponseEntity<Object> sumSpending(Authentication authentication){
        ResponseEntity<Object> res;
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            map.put("status", "success");
            map.put("data", spendingService.getSpendingCate(authentication));
            
            res = new ResponseEntity<Object>(map,HttpStatus.OK);
        } catch (Exception e) {
            map.clear();
            map.put("status", "fail");
            map.put("data", spendingService.getSpendingCate(authentication));
            res = new ResponseEntity<Object>(map,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }
}
