package b2c_eco.example.quanlytaichinhcanhan.Target;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import b2c_eco.example.quanlytaichinhcanhan.User.User;
import b2c_eco.example.quanlytaichinhcanhan.User.UserService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TargetService {
    @Autowired
    private final TargetRepositoty targetRepositoty;

    @Autowired
    private final UserService userService;

    public List<Target> getAllTars(Authentication authentication){
        User user = userService.getUser(authentication).orElse(null);
        Long uid = user.getId();
        return targetRepositoty.findAllById(uid);
    }

    public Target getTarWithIdt(Authentication authentication, Long id){
        User user = userService.getUser(authentication).orElse(null);
        Long uid = user.getId();
        return targetRepositoty.findByIdAndIdt(uid, id);
    }

    public Target createUserTar(Target target){
        return targetRepositoty.save(target);
    }

    public Target changeUserTar(Long id, Long uid, Target target){
        target.setId(uid);
        target.setIdt(id);
        return targetRepositoty.save(target);
    }

    public void deleteTar(Authentication authentication, Long id, Long uid){
        User user = userService.getUser(authentication).orElse(null);
        Long uidCheck = user.getId();
        if(uid == uidCheck){
            targetRepositoty.deleteById(id);
        }
    }
}
