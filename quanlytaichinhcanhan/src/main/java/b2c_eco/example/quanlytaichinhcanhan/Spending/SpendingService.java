package b2c_eco.example.quanlytaichinhcanhan.Spending;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import b2c_eco.example.quanlytaichinhcanhan.Spending.SpendingRepository.SumSpend;
import b2c_eco.example.quanlytaichinhcanhan.User.User;
import b2c_eco.example.quanlytaichinhcanhan.User.UserService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SpendingService {
    @Autowired
    private final SpendingRepository spendingRepository;

    @Autowired
    private final UserService userService;

    public List<Spending> getAllSpds(Authentication authentication){
        User user = userService.getUser(authentication).orElse(null);
        Long uid = user.getId();
        return spendingRepository.findAllById(uid);
    }

    public Spending getSpdWithIds(Authentication authentication, Long id){
        User user = userService.getUser(authentication).orElse(null);
        Long uid = user.getId();
        return spendingRepository.findByIdAndIds(uid, id);
    }

    public Spending createUserSpd(Spending spending){
        return spendingRepository.save(spending);
    }

    public Spending changeUserSpd(Long id, Long uid, Spending spending){
        spending.setId(uid);
        spending.setIds(id);
        return spendingRepository.save(spending);
    }

    public void deleteSpd(Authentication authentication, Long id, Long uid) throws Exception{
        User user = userService.getUser(authentication).orElse(null);
        Long uidCheck = user.getId();
        if(uid == uidCheck){
            spendingRepository.deleteById(id);
        } 
        else throw new Exception("Not found!");
    }

    public List<SumSpend> getSpendingCate(Authentication authentication){
        User user = userService.getUser(authentication).orElse(null);
        Long uid = user.getId();
        return spendingRepository.sumSpendingValueByCategory(uid);
    }

    public List<Spending> topSeven(Authentication authentication){
        User user = userService.getUser(authentication).orElse(null);
        Long uid = user.getId();
        return spendingRepository.getTop7Recent(uid);
    }
}
