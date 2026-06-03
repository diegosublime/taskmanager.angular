import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home.page/home.page';
import { ListsPage } from './features/lists/pages/lists.page/lists.page'; 
import { ListDetailsPage } from './features/lists/pages/list-details.page/list-details.page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage,
        pathMatch: 'full'
    }, 
    {
        path: 'lists',
        component: ListsPage,
    },
    {
        path: 'lists/:id',
        component: ListDetailsPage,
    }  
   
];
