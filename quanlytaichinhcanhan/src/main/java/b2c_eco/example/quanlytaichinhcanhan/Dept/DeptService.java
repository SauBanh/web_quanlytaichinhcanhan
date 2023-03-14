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
        return deptRepository.findAllById(uid);
    }

    public Dept getDeptWithIdD(Authentication authentication, Long id){
        User user = userService.getUser(authentication).orElse(null);
        Long uid = user.getId();
        return deptRepository.findByIdAndIdd(uid, id);
    }

    public Dept createUserDept(Dept dept){
        return deptRepository.save(dept);
    }

    public Dept changeUserDept(Authentication authentication, Long id, Long uid, Dept dept){
        dept.setId(uid);
        User user = userService.getUser(authentication).orElse(null);
        Long uidCheck = user.getId();
        if(uid != uidCheck){
            return deptRepository.save(dept);
        } else {
            dept.setIdd(id);
            return deptRepository.save(dept);
        }
    }

    public void deleteDept(Authentication authentication, Long id, Long uid){
        User user = userService.getUser(authentication).orElse(null);
        Long uidCheck = user.getId();
        if(uid == uidCheck){
            deptRepository.deleteById(id);
        }
    }

}
