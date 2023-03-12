package b2c_eco.example.quanlytaichinhcanhan.Dept;

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
@RequestMapping("/api/dept")
@RequiredArgsConstructor
public class DeptController {
    
    @Autowired
    private final DeptService deptService;

    @GetMapping("/")
    public List<Dept> getAllUserDepts(Authentication authentication){
        return deptService.getAllDepts(authentication);
    }

    @GetMapping("/{id}")
    public Dept getDept(Authentication authentication, @PathVariable("id") Long id){
        return deptService.getDeptWithIdD(authentication, id);
    }

    @PostMapping("/")
    public Dept addDept(Long id, @RequestBody Dept dept){
        return deptService.createUserDept(id, dept);
    }

    @PutMapping("/{id}")
    public Dept changeDept(@PathVariable("id") Long id, Long uid, @RequestBody Dept dept){
        return deptService.changeUserDept(id, uid, dept);
    }

    @DeleteMapping("/{id}")
    public void deleteDept(@PathVariable("id") Long id){
        deptService.deleteDept(id);
    }
}
