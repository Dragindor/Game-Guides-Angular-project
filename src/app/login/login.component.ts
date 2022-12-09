import { Component } from '@angular/core';
import { Login } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  handleFormSubmit(value: {username: string; email: string; password: string;}): void{
    console.log(value);
    Login(value);
  }

}

