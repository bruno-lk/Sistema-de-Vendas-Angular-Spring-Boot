import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientsService } from 'src/app/clients.service';

import { Client } from '../clients';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css'],
})
export class ClientsFormComponent implements OnInit {
  client: Client;
  success: Boolean = false;
  errors: String[];
  id: number;

  constructor(
    private service: ClientsService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
    this.client = new Client();
  }

  ngOnInit(): void {
    const params: Observable<Params> = this.activatedRouter.params;

    params.subscribe((urlParams) => {
      this.id = urlParams['id'];

      if (this.id) {
        this.service.getClientById(this.id).subscribe(
          (response) => {
            this.client = response;
          },
          (errorResponse) => {
            this.client = new Client();
          }
        );
      }
      
    });
  }

  onSubmit() {
    if (this.id) {
      this.service.updateClient(this.client).subscribe(
        (response) => {
          (this.success = true), (this.errors = null);
        },
        (errorResponse) => {
          this.errors = ['Erro ao atualizar cliente'];
        }
      );
    } else {
      this.service.salvar(this.client).subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
          this.client = response;
        },
        (errorResponse) => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        }
      );
    }
  }

  returnToList() {
    this.router.navigate(['/clients-list']);
  }
}
