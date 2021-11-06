import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import {ROUTING} from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { DetallePersonajeComponent } from './components/detalle-personaje/detalle-personaje.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PersonajesComponent,
    DetallePersonajeComponent
  ],
  imports: [
    BrowserModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
