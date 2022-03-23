package io.github.brunolk.clientes.rest;

import io.github.brunolk.clientes.exception.UserSaveException;
import io.github.brunolk.clientes.model.entity.User;
import io.github.brunolk.clientes.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestBody @Valid User user){
        try {
            service.save(user);
        } catch ( UserSaveException e ) {
            throw new ResponseStatusException( HttpStatus.BAD_REQUEST, e.getMessage() );
        }
    }
}
