import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirstParagraphComponent } from './first-paragraph/first-paragraph.component';
import { SecondParagraphComponent } from './second-paragraph/second-paragraph.component';
import { ThirdParagraphComponent } from './third-paragraph/third-paragraph.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FirstParagraphComponent, SecondParagraphComponent, ThirdParagraphComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ForthSession';

  firstIsActive:boolean = true;
  lastname:string = ''

  ngOnInit(): void{
    setTimeout(() => {
      this.firstIsActive = false
    }, 5000);
  }

  onHandleLastname(lastname: string){
    this.lastname = lastname;
  }
}
