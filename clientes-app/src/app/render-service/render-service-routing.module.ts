import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderServiceFormComponent } from './render-service-form/render-service-form.component';
import { RenderServiceListComponent } from './render-service-list/render-service-list.component';

const routes: Routes = [
  {path: 'render-service-form', component: RenderServiceFormComponent},
  {path: 'render-service-list', component: RenderServiceListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenderServiceRoutingModule { }
