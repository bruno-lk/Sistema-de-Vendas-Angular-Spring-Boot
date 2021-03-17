import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Client } from './clients/clients';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  constructor(private http: HttpClient) {}

  salvar(cliente: Client): Observable<Client> {
    return this.http.post<Client>('http://localhost:8080/api/clients', cliente);
  }

  getClient(): Client {
    let client: Client = new Client();

    client.name = 'Fulano de Tal';
    client.cpf = '99999999999';

    return client;
  }
}