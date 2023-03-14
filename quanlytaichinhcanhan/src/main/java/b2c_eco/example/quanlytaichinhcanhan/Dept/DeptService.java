package b2c_eco.example.quanlytaichinhcanhan.Dept;

import org.springframework.security.core.Authentication;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import b2c_eco.example.quanlytaichinhcanhan.User.User;
import b2c_eco.example.quanlytaichinhcanhan.User.UserService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DeptService {
    
    @Autowired
    private final DeptRepository deptRepository;

    @Autowired
    private final UserService userService;

    public List<Dept> getAllDepts(Authentication authentication){
        User user = userService.getUser(authentication).orElse(null);
        Long uid = user.getId();
        return deptRepository.findByIdOrderByAddDateAsc(uid);
    }

    public Dept getDeptWithIdD(Authentication authentication, Long id){
        User user = userService.getUser(authentication).orElse(null);
        Long uid = user.getId();
        return deptRepository.findByIdAndIdD(uid, id);
    }

    public Dept createUserDept(Long uid, Dept dept){
        dept.setId(uid);
        return deptRepository.save(dept);
    }

    public Dept changeUserDept(Long id, Long uid, Dept dept){
        dept.setId(uid);
        dept.setIdD(id);
        return deptRepository.save(dept);
    }

    public void deleteDept(Long id){
        deptRepository.deleteById(id);
    }

}
