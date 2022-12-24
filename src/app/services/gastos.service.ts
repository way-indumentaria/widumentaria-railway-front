import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { IGasto } from "../models/gasto";

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  URI:string = 'https://widumentaria-railway-back-production.up.railway.app'
  //URI:string = 'http://localhost:3000'

  constructor(private http:HttpClient) {

  }

   getGastos()
   {
      return this.http.get<IGasto[]>(this.URI+'/gastos');
   }

   saveGasto(unGasto:IGasto)
   {
     return this.http.post(this.URI+'/gastos',unGasto);
   }

   updateGasto(unGasto:IGasto){

    let id:number = unGasto.id_gasto;

    return this.http.put(this.URI+'/gastos/'+id,unGasto);


   }


   deleteGasto(id:number){

    return this.http.delete(this.URI+'/gastos/' +id);
   }
}
