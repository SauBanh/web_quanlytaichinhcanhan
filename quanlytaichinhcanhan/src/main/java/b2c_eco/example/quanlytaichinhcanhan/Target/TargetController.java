package b2c_eco.example.quanlytaichinhcanhan.Target;

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
@RequestMapping("/api/target")
@RequiredArgsConstructor
public class TargetController {
    @Autowired
    private final TargetService targetService;

    @GetMapping("/")
    public ResponseEntity<Object> getAllTargets(Authentication authentication){
        ResponseEntity<Object> res;
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            map.put("status", "success");
            map.put("targets", targetService.getAllTars(authentication));
            
            res = new ResponseEntity<Object>(map,HttpStatus.OK);
        } catch (Exception e) {
            map.clear();
            map.put("status", "fail");
            map.put("targets", null);
            res = new ResponseEntity<Object>(map,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }

    @GetMapping("/{id}/")
    public ResponseEntity<Object> getTarget(Authentication authentication, @PathVariable("id") Long id){
        // return targetService.getTarWithIdt(authentication, id);
        ResponseEntity<Object> res;
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            map.put("status", "success");
            map.put("target", targetService.getTarWithIdt(authentication, id));
            
            res = new ResponseEntity<Object>(map,HttpStatus.OK);
        } catch (Exception e) {
            map.clear();
            map.put("status", "fail");
            map.put("target", null);
            res = new ResponseEntity<Object>(map,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }

    @PostMapping("/")
    public ResponseEntity<Object> addTarget(@RequestBody Target target){
        // return targetService.createUserTar(target);
        ResponseEntity<Object> res;
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            map.put("status", "success");
            map.put("target", targetService.createUserTar(target));
            
            res = new ResponseEntity<Object>(map,HttpStatus.OK);
        } catch (Exception e) {
            map.clear();
            map.put("status", "fail");
            map.put("target", null);
            res = new ResponseEntity<Object>(map,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }

    @PutMapping("/{id}/{uid}")
    public ResponseEntity<Object> changeTarget(@PathVariable("id") Long id, @PathVariable("uid") Long uid, @RequestBody Target target){
        // return targetService.changeUserTar(id, uid, target);
        ResponseEntity<Object> res;
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            map.put("status", "success");
            map.put("target", targetService.changeUserTar(id, uid, target));
            
            res = new ResponseEntity<Object>(map,HttpStatus.OK);
        } catch (Exception e) {
            map.clear();
            map.put("status", "fail");
            map.put("target", null);
            res = new ResponseEntity<Object>(map,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }

    @DeleteMapping("/{id}/{uid}")
    public ResponseEntity<Object> deleteTarget(Authentication authentication, @PathVariable("id") Long id, @PathVariable("uid") Long uid){
        ResponseEntity<Object> res;
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            targetService.deleteTar(authentication, id, uid);
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
}