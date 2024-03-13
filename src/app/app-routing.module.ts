import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth-componants/signup/signup.component';
import { LoginComponent } from './auth-componants/login/login.component';

const routes: Routes = [
  {
    path:"signup" , component:SignupComponent
  },
   {
    path:"login" , component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
