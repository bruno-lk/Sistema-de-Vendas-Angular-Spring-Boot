import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/clients.service';
import { Client } from 'src/app/clients/clients';
import { RenderServiceService } from 'src/app/render-service.service';
import { RenderService } from '../RenderService';

@Component({
  selector: 'app-render-service-form',
  templateUrl: './render-service-form.component.html',
  styleUrls: ['./render-service-form.component.css']
})
export class RenderServiceFormComponent implements OnInit {

  clientsList: Client[] = [];
  service:RenderService;
  success: Boolean = false;
  errors: String[];

  constructor(
    private clientsService: ClientsService,
    private renderServiceService: RenderServiceService
  ) {
    this.service = new RenderService()
  }

  ngOnInit(): void {
    this.clientsService
      .getClients()
      .subscribe(response => this.clientsList = response)
    }

  onSubmit(){
    this.renderServiceService
      .save(this.service)
      .subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
          this.service = new RenderService();
        },
        (errorResponse) => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        }
      );
  }

}
