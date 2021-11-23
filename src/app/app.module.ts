import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreacionSolicitudComponent } from './modules/solicitudes/solicitud/creacion-solicitud/creacion-solicitud.component';
import { EdicionSolicitudComponent } from './modules/solicitudes/solicitud/edicion-solicitud/edicion-solicitud.component';
import { ListadoSolicitudComponent } from './modules/solicitudes/solicitud/listado-solicitud/listado-solicitud.component';
import { RemoverSolicitudComponent } from './modules/solicitudes/solicitud/remover-solicitud/remover-solicitud.component';
import { CreacionEvaluacionsolicitudComponent } from './modules/solicitudes/evaluacionsolicitud/creacion-evaluacionsolicitud/creacion-evaluacionsolicitud.component';
import { EdicionEvaluacionsolicitudComponent } from './modules/solicitudes/evaluacionsolicitud/edicion-evaluacionsolicitud/edicion-evaluacionsolicitud.component';
import { ListadoEvaluacionsolicitudComponent } from './modules/solicitudes/evaluacionsolicitud/listado-evaluacionsolicitud/listado-evaluacionsolicitud.component';
import { RemoverEvaluacionsolicitudComponent } from './modules/solicitudes/evaluacionsolicitud/remover-evaluacionsolicitud/remover-evaluacionsolicitud.component';
import { CreacionResultadosolicitudComponent } from './modules/solicitudes/resultadosolicitud/creacion-resultadosolicitud/creacion-resultadosolicitud.component';
import { EdicionResultadosolicitudComponent } from './modules/solicitudes/resultadosolicitud/edicion-resultadosolicitud/edicion-resultadosolicitud.component';
import { ListadoResultadosolicitudComponent } from './modules/solicitudes/resultadosolicitud/listado-resultadosolicitud/listado-resultadosolicitud.component';
import { RemoverResultadosolicitudComponent } from './modules/solicitudes/resultadosolicitud/remover-resultadosolicitud/remover-resultadosolicitud.component';
import { CreacionRecordatorioComponent } from './modules/solicitudes/recordatorio/creacion-recordatorio/creacion-recordatorio.component';
import { EdicionRecordatorioComponent } from './modules/solicitudes/recordatorio/edicion-recordatorio/edicion-recordatorio.component';
import { ListadoRecordatorioComponent } from './modules/solicitudes/recordatorio/listado-recordatorio/listado-recordatorio.component';
import { RemoverRecordatorioComponent } from './modules/solicitudes/recordatorio/remover-recordatorio/remover-recordatorio.component';
import { CreacionLlamadaComponent } from './modules/solicitudes/llamada/creacion-llamada/creacion-llamada.component';
import { EdicionLlamadaComponent } from './modules/solicitudes/llamada/edicion-llamada/edicion-llamada.component';
import { ListadoLlamadaComponent } from './modules/solicitudes/llamada/listado-llamada/listado-llamada.component';
import { RemoverLlamadaComponent } from './modules/solicitudes/llamada/remover-llamada/remover-llamada.component';
import { HeaderComponent } from './public/template/header/header.component';
import { NavbarComponent } from './public/template/navbar/navbar.component';
import { FooterComponent } from './public/template/footer/footer.component';
import { NotFoundComponent } from './public/error/not-found/not-found.component';
import { InternalServerErrorComponent } from './public/error/internal-server-error/internal-server-error.component';
import { HomeComponent } from './public/general/home/home.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    CreacionSolicitudComponent,
    EdicionSolicitudComponent,
    ListadoSolicitudComponent,
    RemoverSolicitudComponent,
    CreacionEvaluacionsolicitudComponent,
    EdicionEvaluacionsolicitudComponent,
    ListadoEvaluacionsolicitudComponent,
    RemoverEvaluacionsolicitudComponent,
    CreacionResultadosolicitudComponent,
    EdicionResultadosolicitudComponent,
    ListadoResultadosolicitudComponent,
    RemoverResultadosolicitudComponent,
    CreacionRecordatorioComponent,
    EdicionRecordatorioComponent,
    ListadoRecordatorioComponent,
    RemoverRecordatorioComponent,
    CreacionLlamadaComponent,
    EdicionLlamadaComponent,
    ListadoLlamadaComponent,
    RemoverLlamadaComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    InternalServerErrorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
