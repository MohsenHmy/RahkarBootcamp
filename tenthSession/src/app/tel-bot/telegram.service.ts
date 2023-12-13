import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TelegramService {

    http = inject(HttpClient)


    sendMessage(chat_id: number, text: string, reply_markup: any) {
        var data = {
            chat_id: chat_id,
            text: text,
            reply_markup: { keyboard: reply_markup }
        }
        return this.http.post(`https://api.telegram.org/bot6515253773:AAGFLWgRYxk48zmWZD0MKh3YhkeqvLrVgtk/sendMessage`, data)
    }

    sendPhoto(chat_id:number,photo:string,caption:string){
        var data={
            chat_id:chat_id,
            photo:photo,
            caption:caption
        }
        return this.http.post( `https://api.telegram.org/bot6515253773:AAGFLWgRYxk48zmWZD0MKh3YhkeqvLrVgtk/sendPhoto`,data)
    }                           
}
