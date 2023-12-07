import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class productGetter {

    http = inject(HttpClient)

    getPro(): Observable<any>{
        return this.http.get('https://jsonplaceholder.typicode.com/user/1/posts')
    }

}