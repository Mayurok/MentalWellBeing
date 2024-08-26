package com.wellbeing;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@SpringBootApplication
@EnableWebSecurity
@ComponentScan(basePackages = "com.*")
@EnableJpaRepositories("com.repo")
@EntityScan("com.modal")
public class WellbeingApplication {

	public static void main(String[] args) {
		SpringApplication.run(WellbeingApplication.class, args);
	}

}
