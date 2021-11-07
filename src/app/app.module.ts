import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//Rutas
import {ROUTING} from './app.routes';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { DetallePersonajeComponent } from './components/detalle-personaje/detalle-personaje.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonajesComponent,
    DetallePersonajeComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
