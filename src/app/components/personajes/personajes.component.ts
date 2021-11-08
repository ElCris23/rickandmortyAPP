import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginaModel } from 'src/app/models/paginas.model';
import { PersonajeModel } from 'src/app/models/personaje.model';
import { PaginaService } from 'src/app/services/pagina.service';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  personajes:PersonajeModel[] = [];
  pages:PaginaModel[]=[];
  paginas:PaginaModel[]=[];
  page:PaginaModel = new PaginaModel();
  pagina:number=1;
  flag:boolean;

  constructor(private personajesService: PersonajesService,
              private roter: Router,
              private paginaService: PaginaService) {}

  ngOnInit(): void {

    this.flag=this.paginaService.getFlag();
    if(!this.flag){
      this.personajesService.obtenerPersonajes().subscribe(
        resp => {
          console.log("resp", resp);
          this.personajes=resp.results
          
          for(let i=0;i<resp.info.pages;i++){
            this.page=new PaginaModel();
            this.page.numero = i+1;
            this.page.class = "page-item";
            this.pages.push(this.page);
          }
            this.paginas[0] = this.pages[0];
            this.paginas[1] = this.pages[1];
            this.paginas[2] = this.pages[2];
            this.paginas[3] = this.pages[3];
            this.paginas[4] = this.pages[4];
            this.paginas[0].class = "page-item active";
        });
    }else{
      this.pagina=this.paginaService.getPagina();
      this.personajesService.obtenerPersonajesPagina(this.pagina).subscribe(
        resp => {
          console.log("resp pag -> ",resp);
          this.personajes = resp.results;
          for(let i=0;i<resp.info.pages;i++){
            this.page=new PaginaModel();
            this.page.numero = i+1;
            if(i+1==this.pagina){
              this.page.class = "page-item active";
            }else{
              this.page.class = "page-item";
            }
            this.pages.push(this.page);

          }
          if(this.pagina < this.pages.length-4){
            this.paginas[0] = this.pages[this.pagina-1];
            this.paginas[1] = this.pages[this.pagina];
            this.paginas[2] = this.pages[this.pagina+1];
            this.paginas[3] = this.pages[this.pagina+2];
            this.paginas[4] = this.pages[this.pagina+3];           
          }else{
            this.paginas[4] = this.pages[this.pages.length-1];
            this.paginas[3] = this.pages[this.pages.length-2];
            this.paginas[2] = this.pages[this.pages.length-3];
            this.paginas[1] = this.pages[this.pages.length-4];
            this.paginas[0] = this.pages[this.pages.length-5];
          }
        }
      );
    }

  }

  verDetalle(ide:number){
    this.paginaService.setPagina(this.pagina)
    this.paginaService.setFlag(true);
    this.roter.navigateByUrl(`/detalle/${ ide }`);
  }

  paginacion(page:number){
    if(page!=0){
      this.pagina=page;
      this.personajesService.obtenerPersonajesPagina(page).subscribe(
        resp => {
          console.log("resp pag -> ",resp);
          this.personajes = resp.results;
          for(let i=0;i<resp.info.pages;i++){
            this.pages[i].class = "page-item";
          }
          this.pages[page-1].class = "page-item active";
        }
      );
    }
  }

  nextPage(page:number){
    let total = this.pages.length;
    for(let pag in this.pages){
      if(page<total-4){
        if(this.pages[pag].numero == page){
          this.paginas[0] = this.pages[pag];
          this.paginas[1] = this.pages[parseInt(pag)+1];
          this.paginas[2] = this.pages[parseInt(pag)+2];
          this.paginas[3] = this.pages[parseInt(pag)+3];
          this.paginas[4] = this.pages[parseInt(pag)+4];
        }
      }else{
        this.paginas[4] = this.pages[total-1];
        this.paginas[3] = this.pages[total-2];
        this.paginas[2] = this.pages[total-3];
        this.paginas[1] = this.pages[total-4];
        this.paginas[0] = this.pages[total-5];        
      }

    }
  }

  previousPage(page:number){
      for(let pag in this.pages){
        if(page>5){
          if(this.pages[pag].numero == page){
          this.paginas[0] = this.pages[parseInt(pag)-4];
          this.paginas[1] = this.pages[parseInt(pag)-3];
          this.paginas[2] = this.pages[parseInt(pag)-2];
          this.paginas[3] = this.pages[parseInt(pag)-1];
          this.paginas[4] = this.pages[pag];
        }
        }else{
          this.paginas[0] = this.pages[0];
          this.paginas[1] = this.pages[1];
          this.paginas[2] = this.pages[2];
          this.paginas[3] = this.pages[3];
          this.paginas[4] = this.pages[4];
        }
      }
    
  }

}
