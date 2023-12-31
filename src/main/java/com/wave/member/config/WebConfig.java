package com.wave.member.config;


import javax.annotation.PostConstruct;

// import javax.annotation.PostConstruct;

// import org.springframework.context.annotation.Configuration;
// import org.springframework.web.servlet.config.annotation.CorsRegistry;
// import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// @Configuration
// public class WebConfig implements WebMvcConfigurer {
//     @Override
//     public void addCorsMappings(CorsRegistry registry) {
//         registry.addMapping("/**")
//                 .allowedOrigins("http://localhost:3000")
//                 .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
//                 .allowedHeaders("*")
//                 .allowCredentials(true)
//                 .maxAge(3600);
//     }
//     @PostConstruct
//     public void init() {
//         System.out.println("CORS 구성 적용됨.");
//     }
// }




import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://127.0.0.1:3000")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true)
                .maxAge(3600);

    }
    
     @PostConstruct
    public void init() {
        System.out.println("CORS 구성 적용됨.");
    }

    // @Override
    // public void addCorsMappings(CorsRegistry registry) {
    //     registry.addMapping("/**")
    //             .allowedOrigins("*")
    //             .allowedMethods("*")
    //             .allowedHeaders("*")
    //             .allowCredentials(true)
    //             .maxAge(3600);
    // }
}



// package config;

// import org.springframework.context.annotation.Configuration;
// import org.springframework.web.servlet.config.annotation.CorsRegistry;
// import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// @Configuration
// public class WebConfig implements WebMvcConfigurer {
 
//     @Override
//     public void addCorsMappings(CorsRegistry registry) {
//         registry.addMapping("/**")
//             .allowedOriginPatterns("*")
//             .allowedMethods("*")
//             .allowedHeaders("*")
//             .allowCredentials(true)
//             .maxAge(3600);
//     }
// }
