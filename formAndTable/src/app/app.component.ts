import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formAndTable';

  user= {
    firstName:"",
    lastName: "",
    phoneNum: "",
    email: ""
  };

  usersList:any[]=[];
  infoForm;

  constructor(private formBuilder: FormBuilder){
    this.infoForm = this.formBuilder.group({
      firstname:[''],
      lastName:[''],
      phoneNumber:[''],
      email:['']
    })

  }
}
