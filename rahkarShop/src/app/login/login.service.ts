import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class auth {

    isLoggedIn: boolean = false

    users = [
        {
            username: 'ali',
            pass: '1234'
        },
        {
            username: 'mohsen',
            pass: '1234'
        }
    ]

    checkUP(name: string, pass: string): boolean {
        let user = this.users.find(
            (user) => user.username == name && user.pass === pass
        )
        if (user) {
            this.isLoggedIn = true;
            return true;
        } else {
            alert('Wrong username or password');
        }
        return false
    }
}