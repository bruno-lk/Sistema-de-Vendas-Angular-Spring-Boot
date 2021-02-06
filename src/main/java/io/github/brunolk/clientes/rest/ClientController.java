package io.github.brunolk.clientes.rest;

import io.github.brunolk.clientes.model.entity.Client;
import io.github.brunolk.clientes.model.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/clients")
public class ClientController {

    private final ClientRepository repository;

    @Autowired
    public ClientController(ClientRepository repository){
        this.repository = repository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Client save( @RequestBody @Valid Client client ){
        return repository.save(client);
    }

    @GetMapping("{id}")
    public  Client findById( @PathVariable Integer id ){
        return repository
                .findById(id)
                .orElseThrow(
                        ()-> new ResponseStatusException(HttpStatus.NOT_FOUND)
                );
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete( @PathVariable Integer id ){
        repository
            .findById(id)
            .map( client -> {
                repository.delete(client);
                return Void.TYPE;
            })
            .orElseThrow(
                    ()-> new ResponseStatusException(HttpStatus.NOT_FOUND)
            );
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update( @PathVariable Integer id, @RequestBody Client updateClient ){
        repository
            .findById(id)
            .map( client -> {
//                updateClient.setId(client.getId());
//                return repository.save(updateClient);

                client.setName(updateClient.getName());
                client.setCpf(updateClient.getCpf());
                return repository.save(client);
            })
            .orElseThrow( ()-> new ResponseStatusException(HttpStatus.NOT_FOUND) );
    }
}
