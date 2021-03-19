import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/clients.service';
import { Client } from '../clients';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css'],
})
export class ClientsListComponent implements OnInit {
  clientsList: Client[] = [];

  constructor(private service: ClientsService) {}

  ngOnInit(): void {
    this.service.getClients().subscribe((response) => {
      this.clientsList = response;
    });
  }
}
