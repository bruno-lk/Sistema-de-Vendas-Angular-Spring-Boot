import { Injectable } from '@angular/core';
import { Client } from './clients/clients';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  constructor() {}

  getClient(): Client {
    let client: Client = new Client();

    client.name = 'Fulano de Tal';
    client.cpf = '99999999999';

    return client;
  }
}
