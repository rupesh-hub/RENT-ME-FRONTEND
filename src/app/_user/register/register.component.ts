import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private fb: FormBuilder, private _userService: UserService, private _router:Router) { }

  registerForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  });;


  onSubmit() {
    if (this.registerForm.valid) {
      // Your registration logic here
      console.log('Form submitted successfully!');
      console.log(this.registerForm.value)
      this._userService
        .register(this.registerForm.value)
        .subscribe((response: any) => {
          this._router.navigate(["/user/login"]);
        }, (error: HttpErrorResponse) => {
          console.log(error)
        })
    } else {
      // Handle invalid form
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }

}
