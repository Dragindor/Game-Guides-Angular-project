import { Component } from '@angular/core';
import { Register} from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  handleFormSubmit(value: {username: string; email: string; password: string;}): void{
    console.log(value);
    Register(value);
  }
}
