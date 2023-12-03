import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thirdSession';
  name = "Mohsen";
  age = 22;

  getName () {
    return "Alireza Ebi"
  }

  getName2(name: string){
    return name
  }

  subtract(a:number ,b:number): number | string{
    let result= a-b;
    if(result >= 0){
      return result;
    }
    
    else{
      return "It's negative";
    } 
  }

  navBarIsshowing:boolean = true

  constructor(){
    console.log("constructor")
  
    setTimeout(() => {
      this.navBarIsshowing= false;
    }, 5000);
  }

  printEvent(e:any){
    console.log(e)
  }

  onHandleFocus(e:any){
    console.log(e)
  }

  onHandleGhoti(e:any){
    console.log(e)
  }
}

