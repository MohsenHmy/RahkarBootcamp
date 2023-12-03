import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-third-paragraph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './third-paragraph.component.html',
  styleUrl: './third-paragraph.component.scss'
})
export class ThirdParagraphComponent {

  isUserLoggedIn: boolean = false;

  fontSizeDefault: number = 20;


  @Output() lastnameChange = new EventEmitter();

  menuListItems: string[] = ['Home', 'About', 'Contact']

  lastname: string ='';

  obj:any ={    
}


  ngOnInit(): void {
    this.obj={
      name:"Mohsen",
      age: 22,
      job: "SE",
      university:{
        name:"ZNU",
        address:"Koshkan City"
      }
    }
    console.log(this.obj)
  }
  
  onChangeFirstName(e:any){
    console.log(e.target.value)
  }

  onChangeLastName(e:any){
    this.lastname = e.target.value
  }

  onHandleClick(){
    this.isUserLoggedIn= !this.isUserLoggedIn
    this.fontSizeDefault ++
    this.lastnameChange.emit(this.lastname)
    this.menuListItems.push(this.lastname)
  }

  getBackGroundColor(){
    if(this.isUserLoggedIn) return 'yellow'
    else return 'red'
  }
}
