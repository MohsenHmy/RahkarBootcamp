import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core'
import { productGetter } from '../productGetter.service';

@Component({
  selector: 'app-table-of-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-of-users.component.html',
  styleUrl: './table-of-users.component.scss'
})
export class TableOfUsersComponent {
  users: any
  private product = inject(productGetter)

  ngOnInit(): void {
    this.product.getPro().subscribe({
      next: (data: any) =>{
        this.users = data
      } 
    })
    
  }
}
