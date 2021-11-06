import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { PersonajesComponent } from './components/personajes/personajes.component';

const ROUTES: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'personajes', component: PersonajesComponent },
    { path: '**', component: HomeComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const ROUTING = RouterModule.forRoot(ROUTES);
