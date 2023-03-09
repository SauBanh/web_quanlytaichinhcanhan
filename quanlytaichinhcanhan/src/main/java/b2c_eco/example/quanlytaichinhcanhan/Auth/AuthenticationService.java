package b2c_eco.example.quanlytaichinhcanhan.Auth;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import b2c_eco.example.quanlytaichinhcanhan.JWT.JwtService;
import b2c_eco.example.quanlytaichinhcanhan.User.User;
import b2c_eco.example.quanlytaichinhcanhan.User.UserRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repo;
    private final PasswordEncoder encoder;
    private final JwtService jwtService;
    private final AuthenticationManager authManager;

    public AuthenticationResponse register(RegisterRequest req) {
        var user = User.builder()
            .username(req.getUsername())
            .name(req.getName())
            .email(req.getEmail())
            .password(encoder.encode(req.getPassword()))
            .build();
        repo.save(user);
        var jwtToken = jwtService.genToken(user);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest req) {
        authManager.authenticate(new UsernamePasswordAuthenticationToken(req.getUsername(), req.getPassword()));
        var user = repo.findByUsername(req.getUsername()).orElseThrow();
        var jwtToken = jwtService.genToken(user);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }

}
