import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first-paragraph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-paragraph.component.html',
  styleUrl: './first-paragraph.component.scss'
})
export class FirstParagraphComponent {
  ngOnDestroy(){
    console.log("Partab Shodam")
  }
}
