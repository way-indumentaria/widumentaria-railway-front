import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { ILocalidad } from "../models/localidad";

@Injectable({
  providedIn: 'root'
})
export class LocalidadesService {

  constructor(private http:HttpClient) {

  }

  getLocalidades()
   {
      return this.http.get<ILocalidad[]>('https://widumentaria-railway-back-production.up.railway.app/localidades');
   }

   saveLocalidad(unaLocalidad:ILocalidad)
   {
      return this.http.post('https://widumentaria-railway-back-production.up.railway.app/localidades',unaLocalidad);
   }

   updateLocalidad(unaLocalidad:ILocalidad)
   {
      let id:number = unaLocalidad.id_localidad;

      return this.http.put('https://widumentaria-railway-back-production.up.railway.app/localidades/'+id,unaLocalidad);
   }

   deleteLocalidad(id:number)
   {
      return this.http.delete('https://widumentaria-railway-back-production.up.railway.app/localidades/'+id);
   }
}
