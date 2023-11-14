package com.example.integracao;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "com.example.integracao.model") 
public class IntegracaoApplication {

	public static void main(String[] args) {
		SpringApplication.run(IntegracaoApplication.class, args);
	}

}
