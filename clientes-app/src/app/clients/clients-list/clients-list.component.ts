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

  constructor(private service: ClientsService, private router: Router) {}

  ngOnInit(): void {
    this.service.getClients().subscribe((response) => {
      this.clientsList = response;
    });
  }

  newRegister(){
    this.router.navigate(['/clients-form'])
  }
}
