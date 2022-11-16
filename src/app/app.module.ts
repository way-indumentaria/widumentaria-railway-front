import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalidadesComponent } from './components/localidades/localidades.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { VentasComponent } from './components/ventas/ventas.component';

import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { CategoriaGastosComponent } from './components/categoria-gastos/categoria-gastos.component';
import { ProvinciasComponent } from './components/provincias/provincias.component';
import { MenupComponent } from './components/menup/menup.component';
import { VendedoresComponent } from './components/vendedores/vendedores.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductosComponent } from './components/productos/productos.component';
import { VentasImpagasPagasComponent } from './components/ventas-impagas-pagas/ventas-impagas-pagas.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { RegistroComponent } from './components/registro/registro.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { AuthGuard } from "./auth.guard";
import { TokenInterceptorService } from "./services/token-interceptor.service";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";

import { VentaDetalleComponent } from './components/venta-detalle/venta-detalle.component';

import { PdfMakeWrapper } from 'pdfmake-wrapper';
import pdfFonts from "pdfmake/build/vfs_fonts";
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component'; // fonts provided for pdfmake
import { ChartModule } from 'angular-highcharts'
// Set the fonts to use
PdfMakeWrapper.setFonts(pdfFonts);

@NgModule({
  declarations: [
    AppComponent,
    LocalidadesComponent,
    GastosComponent,
    VentasComponent,
    CategoriaGastosComponent,
    ProvinciasComponent,
    MenupComponent,
    VendedoresComponent,
    ProductosComponent,
    VentasImpagasPagasComponent,
    CategoriasComponent,
    RegistroComponent,
    IngresoComponent,
    VentaDetalleComponent,
    EstadisticasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    ChartModule
  ],
  providers: [
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true,
     }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
