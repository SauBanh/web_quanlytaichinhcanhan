package b2c_eco.example.quanlytaichinhcanhan.Dept;

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
@RequestMapping("/api/dept")
@RequiredArgsConstructor
public class DeptController {
    
    @Autowired
    private final DeptService deptService;

    @GetMapping("/")
    public ResponseEntity<Object> getAllUserDepts(Authentication authentication){
        // return deptService.getAllDepts(authentication);
        ResponseEntity<Object> res;
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            map.put("status", "success");
            map.put("depts", deptService.getAllDepts(authentication));
            
            res = new ResponseEntity<Object>(map,HttpStatus.OK);
        } catch (Exception e) {
            map.clear();
            map.put("status", "fail");
            map.put("depts", null);
            res = new ResponseEntity<Object>(map,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getDept(Authentication authentication, @PathVariable("id") Long id){
        // return deptService.getDeptWithIdD(authentication, id);
        ResponseEntity<Object> res;
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            map.put("status", "success");
            map.put("dept", deptService.getDeptWithIdD(authentication, id));
            
            res = new ResponseEntity<Object>(map,HttpStatus.OK);
        } catch (Exception e) {
            map.clear();
            map.put("status", "fail");
            map.put("dept", null);
            res = new ResponseEntity<Object>(map,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }

    @PostMapping("/")
    public ResponseEntity<Object> addDept(@RequestBody Dept dept){
        // return deptService.createUserDept(dept);
        ResponseEntity<Object> res;
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            map.put("status", "success");
            map.put("dept", deptService.createUserDept(dept));
            
            res = new ResponseEntity<Object>(map,HttpStatus.OK);
        } catch (Exception e) {
            map.clear();
            map.put("status", "fail");
            map.put("dept", null);
            res = new ResponseEntity<Object>(map,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }

    @PutMapping("/{id}/{uid}")
    public ResponseEntity<Object> changeDept(Authentication authentication, @PathVariable("id") Long id, @PathVariable("uid") Long uid, @RequestBody Dept dept){
        // return deptService.changeUserDept(authentication, id, uid, dept);
        ResponseEntity<Object> res;
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            map.put("status", "success");
            map.put("dept", deptService.changeUserDept(authentication, id, uid, dept));
            
            res = new ResponseEntity<Object>(map,HttpStatus.OK);
        } catch (Exception e) {
            map.clear();
            map.put("status", "fail");
            map.put("dept", null);
            res = new ResponseEntity<Object>(map,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return res;
    }

    @DeleteMapping("/{id}/{uid}")
    public ResponseEntity<Object> deleteDept(Authentication authentication, @PathVariable("id") Long id, @PathVariable("uid") Long uid) {
        ResponseEntity<Object> res;
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            deptService.deleteDept(authentication, id, uid);
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
