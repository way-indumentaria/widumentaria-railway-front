import { Injectable } from '@angular/core';

  import { HttpClient } from "@angular/common/http";
import { IProvincia } from '../models/Provincia';

@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {
//  instancia para acceder a las herramientas de httpclient ( private http:HttpClient )
  constructor( private http:HttpClient ) {
   }

   getProvincias(){

    return this.http.get<IProvincia[]>('https://widumentaria-railway-back-production.up.railway.app/provincias');

   }

   saveProvincias(unaProvincia:IProvincia){

    return this.http.post('https://widumentaria-railway-back-production.up.railway.app/provincias', unaProvincia);
    

   }

   updateProvincia(unaProvincia:IProvincia){

    let id:number = unaProvincia.id_provincia;

    return this.http.put('https://widumentaria-railway-back-production.up.railway.app/provincias/'+id,unaProvincia);


   }

   deleteProvincia(id:number){

    return this.http.delete('https://widumentaria-railway-back-production.up.railway.app/provincias/' +id);
   }
}
