import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from './User'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username : string
  password : string
  loginError : boolean
  cadastrando : boolean
  msgSuccess : string

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit(){
    console.log(`User: ${this.username}, Pass: ${this.password}`)
    this.router.navigate(["/home"])
  }

  preparaCadastro(event){
    event.preventDefault()
    this.cadastrando = true
  }

  cancelaCadastro(){
    this.cadastrando = false
  }

  cadastrar(){
    const user: User = new User();

    user.username = this.username;
    user.password = this.password;

    this.authService.save(user)
      .subscribe( response => {
        this.loginError = false;
        this.msgSuccess = "Cadastro realizado com sucesso! Efetue o login";
      },
      error =>{
        this.loginError = true;
        this.msgSuccess = null;
      } )
  }

}
