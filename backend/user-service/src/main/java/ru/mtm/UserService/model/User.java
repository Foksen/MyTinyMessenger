package ru.mtm.UserService.model;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@Table(name = "users")
public class User {

    @Schema(example = "1")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Schema(example = "Ivan123")
    @Column(unique = true)
    private String username;

    @Schema(example = "ivan123@gmail.com")
    @Column(unique = true)
    private String email;

    @Schema(example = "qwerty")
    private String password;

}
