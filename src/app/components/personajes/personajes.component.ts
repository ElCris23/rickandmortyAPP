import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonajeModel } from 'src/app/models/personaje.model';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  personajes:PersonajeModel[] = [];

  constructor(private personajesService: PersonajesService,
              private roter: Router) { }

  ngOnInit(): void {

    this.personajesService.obtenerPersonajes().subscribe(
      resp => {
        console.log("resp", resp);
        this.personajes=resp.results
      });

  }

  verDetalle(ide:number){
    this.roter.navigateByUrl(`/detalle/${ ide }`);
  }

}
