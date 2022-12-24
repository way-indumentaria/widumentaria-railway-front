import { Injectable } from '@angular/core';

  import { HttpClient } from "@angular/common/http";
import { IProvincia } from '../models/Provincia';

@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {
  
  URI:string = 'https://widumentaria-railway-back-production.up.railway.app'
  //URI:string = 'http://localhost:3000'

//  instancia para acceder a las herramientas de httpclient ( private http:HttpClient )
  constructor( private http:HttpClient ) {
   }

   getProvincias(){

    return this.http.get<IProvincia[]>(this.URI+'/provincias');

   }

   saveProvincias(unaProvincia:IProvincia){

    return this.http.post(this.URI+'/provincias', unaProvincia);
    

   }

   updateProvincia(unaProvincia:IProvincia){

    let id:number = unaProvincia.id_provincia;

    return this.http.put(this.URI+'/provincias/'+id,unaProvincia);


   }

   deleteProvincia(id:number){

    return this.http.delete(this.URI+'/provincias/' +id);
   }
}
