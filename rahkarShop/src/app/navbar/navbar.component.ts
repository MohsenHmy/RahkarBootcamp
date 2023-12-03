import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { auth } from '../login/login.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private loggedstat: auth){
    let loggedInCheck = loggedstat.isLoggedIn
  }
  navItems: string[]=[

  ]

  ngOnInit(): void {
    if(this.loggedstat){
      this.navItems.push("Home", "Shop", "Profile")
    }else{
      this.navItems.push("Home", "Shop", "Log in")
    }
    
  }
}
