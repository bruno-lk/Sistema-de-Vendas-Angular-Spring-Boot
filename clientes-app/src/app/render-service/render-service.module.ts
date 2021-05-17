import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { RenderServiceRoutingModule } from './render-service-routing.module';
import { RenderServiceFormComponent } from './render-service-form/render-service-form.component';
import { RenderServiceListComponent } from './render-service-list/render-service-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [RenderServiceFormComponent, RenderServiceListComponent],
  imports: [
    CommonModule,
    RenderServiceRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports: [RenderServiceFormComponent, RenderServiceListComponent]
})
export class RenderServiceModule { }
