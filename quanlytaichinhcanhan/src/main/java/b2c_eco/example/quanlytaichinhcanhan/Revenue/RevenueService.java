package b2c_eco.example.quanlytaichinhcanhan.Revenue;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import b2c_eco.example.quanlytaichinhcanhan.User.User;
import b2c_eco.example.quanlytaichinhcanhan.User.UserService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RevenueService {
    @Autowired
    private final RevenueRepository revenueRepository;

    @Autowired
    private final UserService userService;

    public List<Revenue> getAllRevs(Authentication authentication){
        User user = userService.getUser(authentication).orElse(null);
        Long uid = user.getId();
        return revenueRepository.findAllById(uid);
    }

    public Revenue getRevWithIdR(Authentication authentication, Long id){
        User user = userService.getUser(authentication).orElse(null);
        Long uid = user.getId();
        return revenueRepository.findByIdAndIdr(uid, id);
    }

    public Revenue createUserRev(Revenue revenue){
        return revenueRepository.save(revenue);
    }

    public Revenue changeUserRev(Long id, Long uid, Revenue revenue){
        revenue.setId(uid);
        revenue.setIdr(id);
        return revenueRepository.save(revenue);
    }

    public void deleteRev(Authentication authentication, Long id, Long uid) throws Exception{
        User user = userService.getUser(authentication).orElse(null);
        Long uidCheck = user.getId();
        if(uid == uidCheck){
            revenueRepository.deleteById(id);
        } 
        else throw new Exception("Not found!");
    }

    public List<Object> topSeven(Authentication authentication){
        User user = userService.getUser(authentication).orElse(null);
        Long uid = user.getId();
        return revenueRepository.getTop7Recent(uid);
    }
}
