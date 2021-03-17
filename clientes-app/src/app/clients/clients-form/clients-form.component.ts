import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/clients.service';

import { Client } from '../clients';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css'],
})
export class ClientsFormComponent implements OnInit {
  client: Client;

  constructor(private service: ClientsService) {
    this.client = new Client();
  }

  ngOnInit(): void {}

  onSubmit() {
    this.service
      .salvar(this.client)
      .subscribe((response) => {
        console.log(response);
    });
  }
}
