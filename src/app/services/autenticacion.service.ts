import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IUsuario } from "../models/usuario";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private http:HttpClient, private route:Router) { }

  register(datosRegistro:IUsuario){
    return this.http.post('https://widumentaria-railway-back-production.up.railway.app/registro', datosRegistro);

  }

  login(datosIngreso:IUsuario){
    return this.http.post('https://widumentaria-railway-back-production.up.railway.app/ingreso', datosIngreso);

  }


    verificarUsuarioLogueado(){
      if(localStorage.getItem('token')){
        return true; 
      }

    }

    cerrarSesion(){
      localStorage.removeItem('token');
      this.route.navigate(['/ingreso'])
    }

}
