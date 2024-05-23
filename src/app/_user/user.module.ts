import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegisterComponent } from './register/register.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path:'user/register', component: RegisterComponent},
  { path:'user/login', component: AuthenticationComponent},
  { path:'user/confirm-email', component: ConfirmEmailComponent},

];

@NgModule({
  declarations: [
    AuthenticationComponent,
    RegisterComponent,
    ConfirmEmailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UserModule { }
