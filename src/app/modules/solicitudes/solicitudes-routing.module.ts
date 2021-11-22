import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreacionEvaluacionsolicitudComponent } from './evaluacionsolicitud/creacion-evaluacionsolicitud/creacion-evaluacionsolicitud.component';
import { EdicionEvaluacionsolicitudComponent } from './evaluacionsolicitud/edicion-evaluacionsolicitud/edicion-evaluacionsolicitud.component';
import { ListadoEvaluacionsolicitudComponent } from './evaluacionsolicitud/listado-evaluacionsolicitud/listado-evaluacionsolicitud.component';
import { RemoverEvaluacionsolicitudComponent } from './evaluacionsolicitud/remover-evaluacionsolicitud/remover-evaluacionsolicitud.component';
import { CreacionLlamadaComponent } from './llamada/creacion-llamada/creacion-llamada.component';
import { EdicionLlamadaComponent } from './llamada/edicion-llamada/edicion-llamada.component';
import { ListadoLlamadaComponent } from './llamada/listado-llamada/listado-llamada.component';
import { RemoverLlamadaComponent } from './llamada/remover-llamada/remover-llamada.component';
import { CreacionRecordatorioComponent } from './recordatorio/creacion-recordatorio/creacion-recordatorio.component';
import { EdicionRecordatorioComponent } from './recordatorio/edicion-recordatorio/edicion-recordatorio.component';
import { ListadoRecordatorioComponent } from './recordatorio/listado-recordatorio/listado-recordatorio.component';
import { RemoverRecordatorioComponent } from './recordatorio/remover-recordatorio/remover-recordatorio.component';
import { CreacionResultadosolicitudComponent } from './resultadosolicitud/creacion-resultadosolicitud/creacion-resultadosolicitud.component';
import { EdicionResultadosolicitudComponent } from './resultadosolicitud/edicion-resultadosolicitud/edicion-resultadosolicitud.component';
import { ListadoResultadosolicitudComponent } from './resultadosolicitud/listado-resultadosolicitud/listado-resultadosolicitud.component';
import { RemoverResultadosolicitudComponent } from './resultadosolicitud/remover-resultadosolicitud/remover-resultadosolicitud.component';
import { CreacionSolicitudComponent } from './solicitud/creacion-solicitud/creacion-solicitud.component';
import { EdicionSolicitudComponent } from './solicitud/edicion-solicitud/edicion-solicitud.component';
import { ListadoSolicitudComponent } from './solicitud/listado-solicitud/listado-solicitud.component';
import { RemoverSolicitudComponent } from './solicitud/remover-solicitud/remover-solicitud.component';

const routes: Routes = [
  {
    path: "creacion-solicitud",
    component: CreacionSolicitudComponent
  },
  {
    path: "edicion-solicitud",
    component: EdicionSolicitudComponent
  },
  {
    path: "listado-solicitud",
    component: ListadoSolicitudComponent
  },
  {
    path: "remover-solicitud",
    component: RemoverSolicitudComponent
  },
  {
    path: "creacion-evaluacionsolicitud",
    component: CreacionEvaluacionsolicitudComponent
  },
  {
    path: "edicion-evaluacionsolicitud",
    component: EdicionEvaluacionsolicitudComponent
  },
  {
    path: "listado-evaluacionsolicitud",
    component: ListadoEvaluacionsolicitudComponent
  },
  {
    path: "remover-evaluacionsolicitud",
    component: RemoverEvaluacionsolicitudComponent
  },
  {
    path: "creacion-resultadosolicitud",
    component: CreacionResultadosolicitudComponent
  },
  {
    path: "edicion-resultadosolicitud",
    component: EdicionResultadosolicitudComponent
  },
  {
    path: "listado-resultadosolicitud",
    component: ListadoResultadosolicitudComponent
  },
  {
    path: "remover-resultadosolicitud",
    component: RemoverResultadosolicitudComponent
  },
  {
    path: "creacion-recordatorio",
    component: CreacionRecordatorioComponent
  },
  {
    path: "edicion-recordatorio",
    component: EdicionRecordatorioComponent
  },
  {
    path: "listado-recordatorio",
    component: ListadoRecordatorioComponent
  },
  {
    path: "remover-recordatorio",
    component: RemoverRecordatorioComponent
  },
  {
    path: "creacion-llamada",
    component: CreacionLlamadaComponent
  },
  {
    path: "edicion-llamada",
    component: EdicionLlamadaComponent
  },
  {
    path: "listado-llamada",
    component: ListadoLlamadaComponent
  },
  {
    path: "remover-llamada",
    component: RemoverLlamadaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudesRoutingModule { }
