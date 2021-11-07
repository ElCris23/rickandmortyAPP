import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajeModel } from 'src/app/models/personaje.model';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.component.html',
  styleUrls: ['./detalle-personaje.component.css']
})
export class DetallePersonajeComponent implements OnInit {

  id:number;
  personaje:PersonajeModel;

  constructor(private route: ActivatedRoute,
              private personajesService: PersonajesService) { 

                const ide = this.route.snapshot.paramMap.get('id');
                this.id = parseInt(ide);

              }

  ngOnInit(): void {

    this.personajesService.verPersonaje(this.id).subscribe(
      resp => {
        this.personaje = resp;
        console.log("personaje -> ", this.personaje);
      }
    )

  }

}
