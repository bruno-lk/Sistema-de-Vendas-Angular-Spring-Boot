package io.github.brunolk.clientes.model.repository;

import io.github.brunolk.clientes.model.entity.Service;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceRepository extends JpaRepository<Service, Integer> {
}
