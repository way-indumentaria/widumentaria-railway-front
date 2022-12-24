import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ICategoria } from "../models/categoria";

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  URI:string = 'https://widumentaria-railway-back-production.up.railway.app'
  //URI:string = 'http://localhost:3000'

  constructor(private http:HttpClient) { }
  getCategoria(){

    return this.http.get<ICategoria[]>(this.URI+'/categoria');
  }

  saveCategoria(unaCategoria:ICategoria){

    return this.http.post(this.URI+'/categoria', unaCategoria);
    

   }
   updateCategoria(unaCategoria:ICategoria){

    let id:number = unaCategoria.id_categoria;

    return this.http.put(this.URI+'/categoria/'+id,unaCategoria);


   }
   deleteCategoria(id:number){

    return this.http.delete(this.URI+'/categoria/' +id);
   }







}
