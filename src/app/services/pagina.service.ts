import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginaService {

  constructor() { console.log("Servicio de pagina listo!!"); }
  
  private _pagina: number;
  public getPagina(): number {
    return this._pagina;
  }
  public setPagina(value: number) {
    this._pagina = value;
  }
  private _flag: boolean;
  public getFlag(): boolean {
    return this._flag;
  }
  public setFlag(value: boolean) {
    this._flag = value;
  }
  
}
