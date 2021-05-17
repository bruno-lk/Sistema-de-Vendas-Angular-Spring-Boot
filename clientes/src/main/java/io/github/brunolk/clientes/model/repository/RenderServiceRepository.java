package io.github.brunolk.clientes.model.repository;

import io.github.brunolk.clientes.model.entity.RenderService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RenderServiceRepository extends JpaRepository<RenderService, Integer> {

    @Query("select s from RenderService s " +
            "join s.client c " +
            "where upper(c.name) like upper(:name) " +
            "and MONTH(s.date) = :month ")
    List<RenderService> findByClientNameAndMonth(
            @Param("name") String name,
            @Param("month") Integer month);
}
