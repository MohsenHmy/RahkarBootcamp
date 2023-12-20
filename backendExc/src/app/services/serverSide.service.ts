import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class serverSideService{
    users: string[] =[]

    addUser(name: string){
        this.users.push(name)
        console.log(this.users)
    }

    diceRoller(){
        return Math.floor(Math.random() * 7)
    }

    scoreCounter(diceNum: number, firstPalyerScore:number, secondPalyerScore:number){
        if(diceNum<4){
            firstPalyerScore++
        }else{
            secondPalyerScore++
        }
        return [firstPalyerScore, secondPalyerScore]
    }

    checkForWinner(firstPalyerScore:number, secondPalyerScore:number, buttonDisabled:boolean){
        if(firstPalyerScore >=5){
            console.log("First player wins")
            return buttonDisabled = true
        }
        if(secondPalyerScore >=5){
            console.log("Second player wins")
            return buttonDisabled = true
        }
        return false
    }

}

