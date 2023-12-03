import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-second-paragraph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './second-paragraph.component.html',
  styleUrl: './second-paragraph.component.scss'
})
export class SecondParagraphComponent {
  @Input() lastName! :string;
}
