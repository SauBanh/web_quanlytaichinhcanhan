package b2c_eco.example.quanlytaichinhcanhan.User;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "http://localhost:3009")
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final PasswordEncoder encoder;

    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private final UserService userService;

    // @GetMapping("/")
    // public List<User> getAllUsers() {
    //     return userRepository.findAll();
    // }

    @GetMapping("/user")
    public Optional<User> getUser(Authentication authentication) {
        return userService.getUser(authentication);
    }

    // @PostMapping("/users")
    // public User createUser(@RequestBody User user) {
    //     return userRepository.save(user);
    // }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable("id") Long id, @RequestBody @Valid User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        user.setId(id);
        return userRepository.save(user);
    }

    // @DeleteMapping("/users/{id}")
    // public void deleteUser(@PathVariable("id") Long id) {
    //     userRepository.deleteById(id);
    // }
}
