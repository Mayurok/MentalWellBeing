package com.config;
import java.util.Arrays;
import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;


@Configuration
@EnableWebSecurity
public class SecurityConfig  {

	 @Bean
	    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
	        http.sessionManagement(management -> management.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
	            	.authorizeHttpRequests(Authorize -> Authorize
	            	.requestMatchers("/api/register").permitAll()
	                .requestMatchers("/api/login").permitAll()
	                .requestMatchers("/api/test").permitAll()
	                .requestMatchers("/api/postresult").permitAll()
	                .requestMatchers("/api/posttest").permitAll()
	                .requestMatchers("/api/**")
	                .permitAll())
	            	
	            
	            .csrf(csrf -> csrf.disable())
	            .cors(cors -> cors.configurationSource(corsConfigurationSource()));
	        
	        return http.build();
}
	 private CorsConfigurationSource corsConfigurationSource() {
	        CorsConfiguration configuration = new CorsConfiguration();
	        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000")); 
	        configuration.setAllowedMethods(Arrays.asList("GET","POST","PUT","DELETE"));
	        configuration.setAllowCredentials(true);
	        configuration.setAllowedHeaders(Collections.singletonList("*"));
	        configuration.setExposedHeaders(Arrays.asList("Authorization"));
	        configuration.setMaxAge(3600L);

	        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	        source.registerCorsConfiguration("/**", configuration);
	        return source;
	    }
	 }