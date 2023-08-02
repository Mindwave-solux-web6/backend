package com.wave.member.controller;

import com.wave.member.domain.Member;
import com.wave.member.domain.Role;
import com.wave.member.dto.MemberFormDto;
import com.wave.member.jwt.JwtTokenProvider;
import com.wave.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.Map;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/members")
public class MemberController {

    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;
    private final MemberRepository memberRepository;

    // 회원 가입
    @PostMapping("/signup")
    public Long signup(@Valid @RequestBody MemberFormDto memberFormDto, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            throw new IllegalArgumentException("Invalid input");
        }

        // 중복 확인
        Optional<Member> existingMember = memberRepository.findByEmail(memberFormDto.getEmail());
        if (existingMember.isPresent()) {
            throw new IllegalArgumentException("Email already exists");
        }

        Member member = Member.builder()
                .name(memberFormDto.getName())
                .email(memberFormDto.getEmail())
                .nickname(memberFormDto.getNickname())
                .password(passwordEncoder.encode(memberFormDto.getPassword()))
                .role(Role.ROLE_MEMBER)
                .build();

        return memberRepository.save(member).getId();
    }

    // 로그인
    @PostMapping("/login")
    public String login(@RequestBody Map<String, String> user) {
        String email = user.get("email");
        String password = user.get("password");

        Member member = memberRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("Invalid email"));

        if (!passwordEncoder.matches(password, member.getPassword())) {
            throw new IllegalArgumentException("Invalid password");
        }

        return jwtTokenProvider.createToken(member.getEmail(), member.getRole());
    }

    @GetMapping("/logout")
    public String logoutPage(HttpServletRequest request, HttpServletResponse response) {
        new SecurityContextLogoutHandler().logout(request, response, SecurityContextHolder.getContext().getAuthentication());
        return "redirect:http://127.0.0.1:8080/";
    }

}