import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { IProducto } from "../models/producto";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  URI:string = 'https://widumentaria-railway-back-production.up.railway.app'
  //URI:string = 'http://localhost:3000'

  constructor(private http:HttpClient) {

  }
  getProductos()
   {
      return this.http.get<IProducto[]>(this.URI+'/producto');
   }

  saveProducto(unProducto:IProducto)
  {
    unProducto.fecha_carga=unProducto.fecha_carga.year+'-'+unProducto.fecha_carga.month+'-'+unProducto.fecha_carga.day;
    return this.http.post(this.URI+'/producto',unProducto);
  }

  updateProducto(unProducto:IProducto)
  {
    let id:number = unProducto.id_producto;
    unProducto.fecha_carga=unProducto.fecha_carga.year+'-'+unProducto.fecha_carga.month+'-'+unProducto.fecha_carga.day;
    return this.http.put(this.URI+'/producto/'+id,unProducto);
  }

  deleteProducto(id:number)
  {
    return this.http.delete(this.URI+'/producto/'+id);
  }

}
