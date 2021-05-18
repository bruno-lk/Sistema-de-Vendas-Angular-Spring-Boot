import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/clients.service';
import { Client } from 'src/app/clients/clients';
import { RenderService } from '../RenderService';

@Component({
  selector: 'app-render-service-form',
  templateUrl: './render-service-form.component.html',
  styleUrls: ['./render-service-form.component.css']
})
export class RenderServiceFormComponent implements OnInit {

  clientsList: Client[] = [];
  service:RenderService;

  constructor(
    private clientsService: ClientsService
  ) {
    this.service = new RenderService()
  }

  ngOnInit(): void {
    this.clientsService
      .getClients()
      .subscribe(response => this.clientsList = response)
    }

  onSubmit(){
    console.log(this.service)
  }

}
