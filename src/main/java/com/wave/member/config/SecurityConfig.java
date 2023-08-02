package com.wave.member.config;

import com.wave.member.jwt.JwtAuthenticationFilter;
import com.wave.member.jwt.JwtTokenProvider;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import lombok.RequiredArgsConstructor;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@RequiredArgsConstructor
@EnableWebSecurity
public class SecurityConfig {

    private final JwtTokenProvider jwtTokenProvider;

    // 비밀번호 암호화
    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    // authenticationManager를 Bean 등록
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
        

   @Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.cors().and() // 추가값: cors() 처리를 http 설정에 추가합니다
        .httpBasic().disable() // Disable basic settings considering only rest api
        .csrf().disable()
        .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS) // Do not use session as token based authentication
        .and()
        .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider), UsernamePasswordAuthenticationFilter.class) // Put JwtAuthenticationFilter before UsernamePasswordAuthenticationFilter
            .authorizeRequests() // Check permissions on requests
        
        .antMatchers("/admin/**").hasRole("ADMIN")
        .antMatchers("/api/post/**").authenticated()
        .anyRequest().permitAll() // other requests can be accessed by anyone
            .and()
            .logout()
            .logoutSuccessUrl("/") // 로그아웃 성공시 리다이렉트 주소
            .invalidateHttpSession(true); // 로그아웃 이후 세션 전체 삭제 여부

    return http.build();
}

}