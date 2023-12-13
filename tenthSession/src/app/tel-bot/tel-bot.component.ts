import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TelegramService } from './telegram.service';

@Component({
  selector: 'app-tel-bot',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tel-bot.component.html',
  styleUrl: './tel-bot.component.scss'
})
export class TelBotComponent {
  http = inject(HttpClient)
  formBuilder = inject(FormBuilder)
  telegramService = inject(TelegramService)
  chatId:number []= [75820215];

  ngOnInit(): void {
    this.addItems()
  }
  errorMessage:string|null = null;
  
  form:FormGroup=this.formBuilder.group({
    text:["",Validators.required],
    photo:["",Validators.required],
    caption:["",Validators.required],
    button:[],
    items:this.formBuilder.array([])
  })

  get items():FormArray{
    return this.form.get('items') as FormArray;
  }

  addItems(){
    this.items.push(this.formBuilder.group({
      name:[""],
    }))
  }

  removeAt(index:number){
    this.items.removeAt(index)
  }

  convertlistToTelegramFormat(list:any[]){
    var arrayOfTelegramFormat:any=[]

    let numberOfButten = this.form.value.button;

    for (let i = 0; i < list.length; i += numberOfButten) {
      const rowButtons = list.slice(i, i + numberOfButten).map(element => ({
        text: element.name,
        callback_data: element.name
      }));
  
      arrayOfTelegramFormat.push(rowButtons);
    }
    return arrayOfTelegramFormat

  }

  submit(){
    this.errorMessage=null
    if (this.form.valid) {
    this.telegramService.sendMessage(
      this.chatId[0],
      this.form.get('text')?.value,
      this.convertlistToTelegramFormat(this.items.value)
      ).subscribe(data=>{})
      this.telegramService.sendPhoto(
        this.chatId[0],
        this.form.get('photo')?.value,
        this.form.get('caption')?.value).subscribe(data=>{})

      }
      else{
      this.errorMessage="text is empty"

      }
  }
  
}
