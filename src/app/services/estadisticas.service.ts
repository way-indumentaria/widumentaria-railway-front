import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  constructor(private http:HttpClient) { }
  
  getVentasCantidadPorVendedor(fdesde:string, fhasta:string)
  {
    return this.http.get('https://widumentaria-railway-back-production.up.railway.app/ventas-cantidad-por-vendedor/'+fdesde+'/'+fhasta);
  }

  getVentasPorVendedor(fdesde:string, fhasta:string)
  {
    return this.http.get('https://widumentaria-railway-back-production.up.railway.app/ventas-por-vendedor/'+fdesde+'/'+fhasta);
  }

  getVentasTotalesFecha(fdesde:string, fhasta:string)
  {
     return this.http.get('https://widumentaria-railway-back-production.up.railway.app/ventas-totales-fecha/'+fdesde+'/'+fhasta);
  }

  getVentasPorProducto(fdesde:string, fhasta:string)
  {
    return this.http.get('https://widumentaria-railway-back-production.up.railway.app/ventas-por-producto/'+fdesde+'/'+fhasta);
  }

  /*getVentasIP(fdesde:string, fhasta:string)
  {
    return this.http.get('https://backend-way.herokuapp.com/ventas-ip/'+fdesde+'/'+fhasta);
  }*/

  getImpagasPagasGastos(fdesde:string, fhasta:string)
  {
    return this.http.get('https://widumentaria-railway-back-production.up.railway.app/impagas-pagas-gastos/'+fdesde+'/'+fhasta);
  }
}
