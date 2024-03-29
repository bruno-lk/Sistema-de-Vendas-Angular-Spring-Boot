import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { ClientsModule } from './clients/clients.module';
import { ClientsService } from './clients.service';
import { RenderServiceModule } from './render-service/render-service.module';
import { RenderServiceService } from './render-service.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, LayoutComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    TemplateModule,
    ClientsModule,
    RenderServiceModule
  ],
  providers: [
    ClientsService,
    RenderServiceService,
    AuthService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
