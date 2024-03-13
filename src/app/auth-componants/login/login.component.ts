import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../../auth-services/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 isSpinning: boolean;
  loginForm: FormGroup;
  constructor(private service:AuthService, private fb:FormBuilder)
  {}
  ngOnInit(){
    this.loginForm = this.fb.group ({
 email:[null,Validators.required],
       password:[null,Validators.required],
    })
    
  }

  submitForm(){
    this.service.login(this.loginForm.value).subscribe((res) =>
    {
    console.log(res);
    if (res.userId !== null )
    {
      const user ={
        id:res.userid,
        role:res.userRole
      }
      console.log(user);
    }
    else {
      console.log("wrong credentiels");
    }
    })

  }
}
