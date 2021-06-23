import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { RenderServiceFormComponent } from './render-service-form/render-service-form.component';
import { RenderServiceListComponent } from './render-service-list/render-service-list.component';

const routes: Routes = [
  { path: 'servicos-prestados', component: LayoutComponent, children: [
    { path: 'form', component: RenderServiceFormComponent },
    { path: 'lista', component: RenderServiceListComponent },
    { path: '', redirectTo: '/servicos-prestados/lista', pathMatch: 'full' }

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenderServiceRoutingModule { }
