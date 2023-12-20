import { Routes } from '@angular/router';
import { TheGameComponent } from './the-game/the-game.component';
import { EnteringComponent } from './entering/entering.component';

export const routes: Routes = [
    {
        path: '',
        component: EnteringComponent
    },
    {
        path: 'login',
        component: EnteringComponent
    },
    {
        path: 'theGame',
        component: TheGameComponent
    }
];
