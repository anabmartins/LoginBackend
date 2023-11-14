package com.example.integracao.model;

import java.io.Serializable;
import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;


@Getter
@Setter

@Entity
public class Usuario implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cod;
    private String username;
    private String password;
}