import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { IGasto } from "../models/gasto";

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  constructor(private http:HttpClient) {

  }

   getGastos()
   {
      return this.http.get<IGasto[]>('https://widumentaria-railway-back-production.up.railway.app/gastos');
   }

   saveGasto(unGasto:IGasto)
   {
     return this.http.post('https://widumentaria-railway-back-production.up.railway.app/gastos',unGasto);
   }

   updateGasto(unGasto:IGasto){

    let id:number = unGasto.id_gasto;

    return this.http.put('https://widumentaria-railway-back-production.up.railway.app/gastos/'+id,unGasto);


   }


   deleteGasto(id:number){

    return this.http.delete('https://widumentaria-railway-back-production.up.railway.app/gastos/' +id);
   }
}
