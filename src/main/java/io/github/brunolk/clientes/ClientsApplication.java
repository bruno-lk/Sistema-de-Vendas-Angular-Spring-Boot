package io.github.brunolk.clientes;

import io.github.brunolk.clientes.model.entity.Client;
import io.github.brunolk.clientes.model.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ClientsApplication {

    @Bean
    public CommandLineRunner run(@Autowired ClientRepository repository){
        return args -> {
            Client client = Client.builder()
                    .cpf("00000000000")
                    .name("Fulano de Tal")
//                    .dataCadastro(LocalDate.now())
                    .build();

            repository.save(client);
        };
    }

    public static void main(String[] args) {
        SpringApplication.run(ClientsApplication.class, args);
    }
}
