package io.github.brunolk.clientes.model.repository;

import io.github.brunolk.clientes.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
