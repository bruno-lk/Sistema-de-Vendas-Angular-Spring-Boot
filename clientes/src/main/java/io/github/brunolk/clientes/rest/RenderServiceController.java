package io.github.brunolk.clientes.rest;

import io.github.brunolk.clientes.model.entity.Client;
import io.github.brunolk.clientes.model.entity.RenderService;
import io.github.brunolk.clientes.model.repository.ClientRepository;
import io.github.brunolk.clientes.model.repository.RenderServiceRepository;
import io.github.brunolk.clientes.rest.dto.RenderServiceDTO;
import io.github.brunolk.clientes.util.BigDecimalConverter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequestMapping("/api/render-services")
@RequiredArgsConstructor
public class RenderServiceController {

    private final ClientRepository clientRepository;
    private final RenderServiceRepository renderServiceRepository;
    private final BigDecimalConverter bigDecimalConverter;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public RenderService save( @RequestBody RenderServiceDTO dto ){
        RenderService renderService = new RenderService();
        LocalDate date = LocalDate.parse(dto.getDate(), DateTimeFormatter.ofPattern("dd/MM/yyyy"));
        Integer idCliente = dto.getIdClient();

        Client client = clientRepository
                .findById(idCliente)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cliente inexistente"));

        renderService.setDescription(dto.getDescription());
        renderService.setDate(date);
        renderService.setClient(client);
        renderService.setValue(bigDecimalConverter.converter(dto.getValue()));

        return renderServiceRepository.save(renderService);
    }

    @GetMapping
    public List<RenderService> search(
            @RequestParam(value = "name", required = false, defaultValue = "") String name,
            @RequestParam(value = "month", required = false) Integer month
    ) {
        return renderServiceRepository.findByClientNameAndMonth("%" + name + "%", month);
    }
}
