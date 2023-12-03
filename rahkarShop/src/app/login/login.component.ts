import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { auth } from './login.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class LoginComponent {
  public loginForm: FormGroup
  enteredUser: string = ""
  enteredPass: string = ""

  constructor(private checkUsPas: auth, private fb:FormBuilder, private route:Router){
    this.loginForm = this.fb.group({
      username: '',
      pass: ''
    })
  }
  onLogin(){
    this.enteredUser = this.loginForm.get('username')?.value
    this.enteredPass = this.loginForm.get('pass')?.value
    this.checkUsPas.checkUP(this.enteredUser, this.enteredPass)
    console.log(this.checkUsPas.isLoggedIn);
    if(this.checkUsPas.isLoggedIn){
      this.route.navigateByUrl("Profile")
    }
  }
}
