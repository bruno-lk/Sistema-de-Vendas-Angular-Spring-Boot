package io.github.brunolk.clientes.model.repository;

import io.github.brunolk.clientes.model.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Integer> {
}
