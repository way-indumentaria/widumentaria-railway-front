import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IUsuario } from "../models/usuario";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  URI:string = 'https://widumentaria-railway-back-production.up.railway.app'
  //URI:string = 'http://localhost:3000'

  constructor(private http:HttpClient, private route:Router) { }

  register(datosRegistro:IUsuario){
    return this.http.post(this.URI+'/registro', datosRegistro);

  }

  login(datosIngreso:IUsuario){
    return this.http.post(this.URI+'/ingreso', datosIngreso);

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
