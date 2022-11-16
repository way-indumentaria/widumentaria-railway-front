import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { IVenta } from "../models/venta";
import { IVentaDetalle } from "../models/venta_detalle";

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private http:HttpClient) {

  }

  sendAllPagas(id_vpi)
  {
    return this.http.get('https://widumentaria-railway-back-production.up.railway.app/enviar-todo-pagas/'+id_vpi);
  }

  getVentas()
  {
     return this.http.get<IVenta[]>('https://widumentaria-railway-back-production.up.railway.app/ventas');
  }

  getVentasByVendedor(id_vendedor:number)
  {
     return this.http.get<IVenta[]>('https://widumentaria-railway-back-production.up.railway.app/ventas-por-vendedor/'+id_vendedor);
  }

  saveVenta(unaVenta:IVenta)
  {
    unaVenta.fecha_venta=unaVenta.fecha_venta.year+'-'+unaVenta.fecha_venta.month+'-'+unaVenta.fecha_venta.day;
    return this.http.post('https://widumentaria-railway-back-production.up.railway.app/ventas',unaVenta);
  }

  saveVentaByLector(unaVenta:IVenta)
  {
    const datos_venta = {
      codigo_producto:unaVenta.producto,
      descuento:null,
      forma_pago:null,
      vendedor:unaVenta.vendedor,
      cantidad:unaVenta.cantidad
    }
    return this.http.post('https://widumentaria-railway-back-production.up.railway.app/ventas-lector',datos_venta);
  }

  updateVenta(unaVenta:IVenta){

    let id:number = unaVenta.id_venta;
    unaVenta.fecha_venta=unaVenta.fecha_venta.year+'-'+unaVenta.fecha_venta.month+'-'+unaVenta.fecha_venta.day;
    return this.http.put('https://widumentaria-railway-back-production.up.railway.app/ventas/'+id,unaVenta);


   }

  deleteVenta(id:number){

    return this.http.delete('https://widumentaria-railway-back-production.up.railway.app/ventas/' +id);
  }


  getImpagas(id_vip:number,estado:number)
  {
    return this.http.get<IVentaDetalle[]>('https://widumentaria-railway-back-production.up.railway.app/ventas-impagas/'+id_vip+'/'+estado);
  }

  getPagas(id_vip:number,estado:number)
  {
    return this.http.get<IVentaDetalle[]>('https://widumentaria-railway-back-production.up.railway.app/ventas-pagas/'+id_vip+'/'+estado);
  }


  sendPagasImpagas(id_venta_detalle:number,id_producto:number,estado:number)
  {
    return this.http.get('https://widumentaria-railway-back-production.up.railway.app/enviar-pagas-impagas/'+id_venta_detalle+'/'+id_producto+'/'+estado);
  }


  sendToImpagaDevoluciones(lista_impagas_devoluciones:any)
  { 
    return this.http.post('https://widumentaria-railway-back-production.up.railway.app/enviar-impagas-devoluciones',lista_impagas_devoluciones);
  }

  confirmVenta(id:number,estado:number)
  {
    const datos = {
      estado:estado
    }
    return this.http.put('https://widumentaria-railway-back-production.up.railway.app/confirmar-impagas/'+id,datos);
  }


  sendStockVenta(id_venta_detalle:number,id_producto:number,tipo_movimiento:number,vendedor:number)
  {
    return this.http.get('https://widumentaria-railway-back-production.up.railway.app/enviar-stock-venta/'+id_venta_detalle+'/'+id_producto+'/'+tipo_movimiento+'/'+vendedor);
  }


  sendStock(id:number)
  {
    return this.http.get('https://widumentaria-railway-back-production.up.railway.app/ventas-a-stock/'+id);
  }


  getTotalPagasImpagas(id_vendedor:number)
  {
    return this.http.get('https://widumentaria-railway-back-production.up.railway.app/total-impagas-pagas/'+id_vendedor);
  }
}
