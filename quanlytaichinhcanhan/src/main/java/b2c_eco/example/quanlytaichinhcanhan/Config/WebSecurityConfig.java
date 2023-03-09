package b2c_eco.example.quanlytaichinhcanhan.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import b2c_eco.example.quanlytaichinhcanhan.JWT.JwtAuthenticationFilter;
import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class WebSecurityConfig {

    public final JwtAuthenticationFilter jwtAuthenticationFilter;

    public final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        
        http
            .csrf()
            .disable()
            .authorizeHttpRequests()
            .requestMatchers( "/v3/**", "/swagger-ui/**", "/swagger-ui.html")
            .permitAll()
            .requestMatchers("/api/auth/**", "")
            .permitAll() // Cho phép tất cả mọi người truy cập vào địa chỉ này
            .anyRequest()
            .authenticated()
            .and()
            .sessionManagement()
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .authenticationProvider(authenticationProvider)// Tất cả các request khác đều cần phải xác thực mới được truy cập
            .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
