import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {
        path: "Login",
        component: LoginComponent
    },
    {
        path: "Shop",
        component: ProductsComponent
    },
    {
        path: "Profile",
        component: ProfileComponent
    }
];
