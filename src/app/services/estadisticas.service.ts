import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  URI:string = 'https://widumentaria-railway-back-production.up.railway.app'
  //URI:string = 'http://localhost:3000'

  constructor(private http:HttpClient) { }
  
  getVentasCantidadPorVendedor(fdesde:string, fhasta:string)
  {
    return this.http.get(this.URI+'/ventas-cantidad-por-vendedor/'+fdesde+'/'+fhasta);
  }

  getVentasPorVendedor(fdesde:string, fhasta:string)
  {
    return this.http.get(this.URI+'/ventas-por-vendedor/'+fdesde+'/'+fhasta);
  }

  getVentasTotalesFecha(fdesde:string, fhasta:string)
  {
     return this.http.get(this.URI+'/ventas-totales-fecha/'+fdesde+'/'+fhasta);
  }

  getVentasPorProducto(fdesde:string, fhasta:string)
  {
    return this.http.get(this.URI+'/ventas-por-producto/'+fdesde+'/'+fhasta);
  }

  /*getVentasIP(fdesde:string, fhasta:string)
  {
    return this.http.get('https://backend-way.herokuapp.com/ventas-ip/'+fdesde+'/'+fhasta);
  }*/

  getImpagasPagasGastos(fdesde:string, fhasta:string)
  {
    return this.http.get(this.URI+'/impagas-pagas-gastos/'+fdesde+'/'+fhasta);
  }
}
