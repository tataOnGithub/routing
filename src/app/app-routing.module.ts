import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { UsersDetailsComponent } from './pages/users-details/users-details.component';
import { UsersListComponent } from './pages/users-list/users-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'users-list',
        pathMatch: 'full'
    },
    {
        path: 'users-list',
        component: UsersListComponent
    },
    {
        path: 'users-details',
        component: UsersDetailsComponent
    }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }