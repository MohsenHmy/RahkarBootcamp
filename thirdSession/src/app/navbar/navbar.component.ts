import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Output() ghoti = new EventEmitter()

  ngOnDestroy(){
    console.log("partab Shodab")
  }

  counter: number = 0;
  onClick(){
    this.counter += 1;
    this.ghoti.emit(this.counter)
  }


  @Input() baste:any;
}
