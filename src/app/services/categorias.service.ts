import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ICategoria } from "../models/categoria";

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http:HttpClient) { }
  getCategoria(){

    return this.http.get<ICategoria[]>('https://widumentaria-railway-back-production.up.railway.app/categoria');
  }

  saveCategoria(unaCategoria:ICategoria){

    return this.http.post('https://widumentaria-railway-back-production.up.railway.app/categoria', unaCategoria);
    

   }
   updateCategoria(unaCategoria:ICategoria){

    let id:number = unaCategoria.id_categoria;

    return this.http.put('https://widumentaria-railway-back-production.up.railway.app/categoria/'+id,unaCategoria);


   }
   deleteCategoria(id:number){

    return this.http.delete('https://widumentaria-railway-back-production.up.railway.app/categoria/' +id);
   }







}
