package io.github.brunolk.clientes.rest.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
public class RenderServiceDTO {
    @NotEmpty(message = "{campo.descricao.obrigatorio}")
    private String description;

    @NotEmpty(message = "{campo.preco.obrigatorio}")
    private String value;

    @NotEmpty(message = "{campo.data.obrigatorio}")
    private String date;

    @NotNull(message = "{campo.cliente.obrigatorio}")
    private Integer idClient;
}
