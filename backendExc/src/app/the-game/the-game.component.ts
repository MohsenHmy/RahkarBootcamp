import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { serverSideService } from '../services/serverSide.service';

@Component({
  selector: 'app-the-game',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './the-game.component.html',
  styleUrl: './the-game.component.scss'
})
export class TheGameComponent {
  diceValue: number=0;
  private service = inject(serverSideService)
  firstPlayerScore= 0
  SecondPlayerScore= 0
  isDisabled = false
  
  rollTheDice(){
    this.diceValue = this.service.diceRoller()
    this.firstPlayerScore = (this.service.scoreCounter(this.diceValue, this.firstPlayerScore, this.SecondPlayerScore))[0]
    this.SecondPlayerScore = (this.service.scoreCounter(this.diceValue, this.firstPlayerScore, this.SecondPlayerScore))[1]
    this.isDisabled = this.service.checkForWinner(this.firstPlayerScore, this.SecondPlayerScore ,this.isDisabled)
  }
}
