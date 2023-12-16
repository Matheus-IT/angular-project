import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: 'pagina-principal', component: MainPageComponent},
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: '/pagina-principal', pathMatch: 'full'},
];
