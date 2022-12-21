import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { catchError, map, of, throwError } from 'rxjs';
import { appEmailDomains } from 'src/app/shared/constants';
import { appEmailValidator, sameValueGroupValidator } from 'src/app/shared/validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  passwordCheck : boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  registerHandler(form: NgForm) {
    if (form.invalid) { return; }
    const { email, username, password, rePassword} = form.value;
    if(password == rePassword) 
    {
      this.passwordCheck = true;
      
      this.authService.register(email!,username!, password!, rePassword!)
      .subscribe(user => {
        this.router.navigate(['/']);
      });
     
    }
  }
}