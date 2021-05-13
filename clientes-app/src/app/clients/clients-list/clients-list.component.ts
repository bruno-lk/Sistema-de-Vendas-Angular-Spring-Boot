import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/clients.service';
import { Client } from '../clients';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css'],
})
export class ClientsListComponent implements OnInit {
  clientsList: Client[] = [];
  clientSelected: Client;
  successString: String;
  errorString: String

  constructor(private service: ClientsService, private router: Router) {}

  ngOnInit(): void {
    this.service.getClients().subscribe((response) => {
      this.clientsList = response;
    });
  }

  newRegister(){
    this.router.navigate(['/clients-form'])
  }

  onDelete(client: Client){
    this.clientSelected = client
  }

  deleteClient(client: Client){
    this.service
    .deleteClient(this.clientSelected)
    .subscribe(
      response => {
        this.successString = "Clinte removido com sucesso";
        this.ngOnInit();
      },
      error => this.errorString = "Ocorreu um erro ao remover cliente"
    )

  }
}
