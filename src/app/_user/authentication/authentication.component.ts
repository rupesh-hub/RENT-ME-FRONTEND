import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent {

  protected errors:any=[];

  constructor(private _userService: UserService, private _router:Router) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted successfully!');
      console.log(form.value)
      this._userService
        .authenticate(form.value)
        .subscribe((response: any) => {
          console.log(response);
          this._router.navigate(["/"]);
          
        },(error:HttpErrorResponse)=>{
          this.errors = [];
          this.errors.push(error.error.error)
        })

    } else {
      // Handle invalid form
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }

}
