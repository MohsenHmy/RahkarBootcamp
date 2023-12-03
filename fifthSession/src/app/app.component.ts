import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fifthSession';
  login= new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  })
  outeruser = new FormControl();
  outerpass = new FormControl()

  // form = new FormGroup({
  //   username: new FormControl(),
  //   password: new FormControl(),
  // });
  // username= new FormControl();
  // password = new FormControl();
  onClick(){
    console.log(this.login.value)
    // console.log(this.form.value)
    // this.username.setValue("Mohsen")
    // this.password.setValue(123456)
  }

  onClick2(){
    console.log(this.outeruser.value)
    console.log(this.outerpass.value)
  }
}
