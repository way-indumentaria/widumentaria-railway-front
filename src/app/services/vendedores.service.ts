import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { IVendedor } from "../models/vendedor";

@Injectable({
  providedIn: 'root'
})
export class VendedoresService {

  URI:string = 'https://widumentaria-railway-back-production.up.railway.app'
  //URI:string = 'http://localhost:3000'

  constructor( private http:HttpClient ) { }

  getVendedores(){

    return this.http.get<IVendedor[]>(this.URI+'/vendedores');
   }

   actualizar_imagen(id,files:FileList)
   {
        const fd = new FormData();
        fd.append('img-vendedor',files[0]);
        return this.http.put(this.URI+'/vendedores-img/'+id,fd);
   }

   saveVendedores(unVendedor:IVendedor,files:FileList){

      const fd = new FormData();

      fd.append('nombre',unVendedor.nombre);
      fd.append('apellido',unVendedor.apellido);
      fd.append('dni',String(unVendedor.dni));
      fd.append('email',unVendedor.email);
      fd.append('localidad',String(unVendedor.localidad));
      fd.append('telefono',String(unVendedor.telefono));
      fd.append('domicilio',unVendedor.domicilio);
      fd.append('adjunto',String(unVendedor.adjunto));
      fd.append('nom_garante',unVendedor.nom_garante);
      fd.append('ape_garante',unVendedor.ape_garante);
      fd.append('dni_garante',String(unVendedor.dni_garante));
      fd.append('email_garante',unVendedor.email_garante);
      fd.append('domicilio_garante',unVendedor.domicilio_garante);
      fd.append('telefono_garante',unVendedor.telefono_garante);
      fd.append('estado',String(unVendedor.estado));
      if(files){
        fd.append('img-vendedor',files[0]);
      }
      

    return this.http.post(this.URI+'/vendedores', fd);
    

   }

   updateVendedor(unVendedor:IVendedor){

    let id:number = unVendedor.id_vendedor;

    return this.http.put(this.URI+'/vendedores/'+id,unVendedor);


   }


   deleteVendedor(id:number){

    return this.http.delete(this.URI+'/vendedores/' +id);
   }

}
