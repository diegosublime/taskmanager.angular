import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home.page/home.page';
import { ListsPage } from './features/lists/pages/lists.page/lists.page'; 
import { ListDetailsPage } from './features/lists/pages/list-details.page/list-details.page';
import { authGuardGuard } from './shared/guards/auth.guard-guard';
import { LoginComponent } from './features/auth/components/login.component/login.component/login.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePage,
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent 
    },  
    {
        path: 'lists',
        component: ListsPage,
        canActivate: [authGuardGuard]
    },
    {
        path: 'lists/:id',
        component: ListDetailsPage,
        canActivate: [authGuardGuard]
    }  
   
];
