package ru.mtm.UserService.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import ru.mtm.UserService.model.User;
import ru.mtm.UserService.service.UserService;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @Operation(summary = "Get user by id")
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Success",
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = User.class))
            ),
            @ApiResponse(responseCode = "404", description = "User not found", content = @Content)
    })
    @GetMapping("/users/{id}")
    public ResponseEntity<?> user(
            @Parameter(description = "User id", required = true) @PathVariable("id") Integer id
    ) {
        return ResponseEntity.ok(userService.getUserById(id));
    }

    @Operation(summary = "Get all users")
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Success",
                    content = {
                            @Content(
                                    mediaType = "application/json",
                                    array = @ArraySchema(schema = @Schema(implementation = User.class))
                            )
                    }
            )
    })
    @GetMapping("/users")
    public ResponseEntity<?> users() {
        return ResponseEntity.ok(userService.getUsers());
    }

}
