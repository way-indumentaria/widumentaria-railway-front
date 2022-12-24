import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IVentaImpagaPaga } from "../models/venta_impaga_paga";

@Injectable({
  providedIn: 'root'
})
export class VentasImpagasPagasService {

  URI:string = 'https://widumentaria-railway-back-production.up.railway.app'
  //URI:string = 'http://localhost:3000'

  constructor(private http:HttpClient) { }

  getVentaImpagaPaga(id_vendedor:number){

    return this.http.get<IVentaImpagaPaga[]>(this.URI+'/venta_impaga_paga/'+id_vendedor);
  }

  saveVentaImpagaPaga(unaVentaImpagaPaga:IVentaImpagaPaga){  
    unaVentaImpagaPaga.fecha_carga=unaVentaImpagaPaga.fecha_carga.year+'-'+unaVentaImpagaPaga.fecha_carga.month+'-'+unaVentaImpagaPaga.fecha_carga.day;
    return this.http.post(this.URI+'/venta_impaga_paga', unaVentaImpagaPaga);
  }

  updateVentaImpagaPaga(unaVentaImpagaPaga:IVentaImpagaPaga){

    let id:number = unaVentaImpagaPaga.id_impaga_paga;
    unaVentaImpagaPaga.fecha_carga=unaVentaImpagaPaga.fecha_carga.year+'-'+unaVentaImpagaPaga.fecha_carga.month+'-'+unaVentaImpagaPaga.fecha_carga.day;
    return this.http.put(this.URI+'/venta_impaga_paga/'+id,unaVentaImpagaPaga);
  }

  
  deleteVentaImpagaPaga(id:number){
    return this.http.delete(this.URI+'/venta_impaga_paga/' +id);
  }

}
