import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { ILocalidad } from "../models/localidad";

@Injectable({
  providedIn: 'root'
})
export class LocalidadesService {

   URI:string = 'https://widumentaria-railway-back-production.up.railway.app'
   //URI:string = 'http://localhost:3000'

  constructor(private http:HttpClient) {

  }

  getLocalidades()
   {
      return this.http.get<ILocalidad[]>(this.URI+'/localidades');
   }

   saveLocalidad(unaLocalidad:ILocalidad)
   {
      return this.http.post(this.URI+'/localidades',unaLocalidad);
   }

   updateLocalidad(unaLocalidad:ILocalidad)
   {
      let id:number = unaLocalidad.id_localidad;

      return this.http.put(this.URI+'/localidades/'+id,unaLocalidad);
   }

   deleteLocalidad(id:number)
   {
      return this.http.delete(this.URI+'/localidades/'+id);
   }
}
