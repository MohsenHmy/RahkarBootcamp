import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { serverSideService } from '../services/serverSide.service'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-entering',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './entering.component.html',
  styleUrl: './entering.component.scss'
})

export class EnteringComponent {

  private ServerSide = inject(serverSideService)
  private formBuilder = inject(FormBuilder)
  
  playerForm = this.formBuilder.group({
    firstPlayer: '',
    secondPlayer: ''
  });


  user:any = []

  bothFilled: boolean = false
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if(this.playerForm.value.firstPlayer && this.playerForm.value.secondPlayer){
      this.bothFilled = true
    }
  }

  
  submit(){
    this.user.push(this.playerForm.value)
    console.log(this.user)
    
  }
}
