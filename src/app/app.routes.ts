import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PersonajesComponent } from './components/personajes/personajes.component';
import { DetallePersonajeComponent } from './components/detalle-personaje/detalle-personaje.component';

const ROUTES: Routes = [
    { path: 'personajes', component: PersonajesComponent },
    { path: 'detalle/:id', component: DetallePersonajeComponent },
    { path: '**', component: PersonajesComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const ROUTING = RouterModule.forRoot(ROUTES);
