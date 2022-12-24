import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { ICategoria_gasto } from "../models/categoria_gasto";

@Injectable({
  providedIn: 'root'
})
export class CategoriaGastosService {
  URI:string = 'https://widumentaria-railway-back-production.up.railway.app'
  //URI:string = 'http://localhost:3000'


  constructor(private http:HttpClient) { 
  }
      getcatGastos(){

        return this.http.get<ICategoria_gasto[]>(this.URI+'/categoria_gasto');
      }

      saveCategorias_gasto(unaCategoria_gasto:ICategoria_gasto){

        return this.http.post(this.URI+'/categoria_gasto', unaCategoria_gasto);
        
    
       }
       updateCategoria_gasto(unaCategoria_gasto:ICategoria_gasto){

        let id:number = unaCategoria_gasto.id_categoria_gasto;
    
        return this.http.put(this.URI+'/categoria_gasto/'+id,unaCategoria_gasto);
    
    
       }

       deleteCategoria_gasto(id:number){

        return this.http.delete(this.URI+'/categoria_gasto/' +id);
       }

 
}
