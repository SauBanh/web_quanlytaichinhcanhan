package b2c_eco.example.quanlytaichinhcanhan.User;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

    @Autowired
    private final UserRepository userRepository;

    public Optional<User> getUser(Authentication authentication){
        String usernamehd = authentication.getName();
        return userRepository.findByUsername(usernamehd);
    }

}
