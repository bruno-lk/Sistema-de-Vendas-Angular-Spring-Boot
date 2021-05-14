package io.github.brunolk.clientes.rest.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class RenderServiceDTO {
    private String description;
    private String value;
    private String date;
    private Integer idClient;
}
