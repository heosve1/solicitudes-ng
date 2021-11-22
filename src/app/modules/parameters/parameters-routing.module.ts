import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreacionAreainvestigacionComponent } from './areainvestigacion/creacion-areainvestigacion/creacion-areainvestigacion.component';
import { EdicionAreainvestigacionComponent } from './areainvestigacion/edicion-areainvestigacion/edicion-areainvestigacion.component';
import { ListadoAreainvestigacionComponent } from './areainvestigacion/listado-areainvestigacion/listado-areainvestigacion.component';
import { RemoverAreainvestigacionComponent } from './areainvestigacion/remover-areainvestigacion/remover-areainvestigacion.component';
import { CreacionComiteComponent } from './comite/creacion-comite/creacion-comite.component';
import { EdicionComiteComponent } from './comite/edicion-comite/edicion-comite.component';
import { ListadoComiteComponent } from './comite/listado-comite/listado-comite.component';
import { RemoverComiteComponent } from './comite/remover-comite/remover-comite.component';
import { CreacionDepartamentoComponent } from './departamento/creacion-departamento/creacion-departamento.component';
import { EdicionDepartamentoComponent } from './departamento/edicion-departamento/edicion-departamento.component';
import { ListadoDepartamentoComponent } from './departamento/listado-departamento/listado-departamento.component';
import { RemoverDepartamentoComponent } from './departamento/remover-departamento/remover-departamento.component';
import { CreacionFacultadComponent } from './facultad/creacion-facultad/creacion-facultad.component';
import { EdicionFacultadComponent } from './facultad/edicion-facultad/edicion-facultad.component';
import { ListadoFacultadComponent } from './facultad/listado-facultad/listado-facultad.component';
import { RemoverFacultadComponent } from './facultad/remover-facultad/remover-facultad.component';
import { CreacionJuradoComponent } from './jurado/creacion-jurado/creacion-jurado.component';
import { EdicionJuradoComponent } from './jurado/edicion-jurado/edicion-jurado.component';
import { ListadoJuradoComponent } from './jurado/listado-jurado/listado-jurado.component';
import { RemoverJuradoComponent } from './jurado/remover-jurado/remover-jurado.component';
import { CreacionModalidadComponent } from './modalidad/creacion-modalidad/creacion-modalidad.component';
import { EdicionModalidadComponent } from './modalidad/edicion-modalidad/edicion-modalidad.component';
import { ListadoModalidadComponent } from './modalidad/listado-modalidad/listado-modalidad.component';
import { RemoverModalidadComponent } from './modalidad/remover-modalidad/remover-modalidad.component';
import { CreacionProponenteComponent } from './proponente/creacion-proponente/creacion-proponente.component';
import { EdicionProponenteComponent } from './proponente/edicion-proponente/edicion-proponente.component';
import { ListadoProponenteComponent } from './proponente/listado-proponente/listado-proponente.component';
import { RemoverProponenteComponent } from './proponente/remover-proponente/remover-proponente.component';
import { CreacionTiposolicitudComponent } from './tiposolicitud/creacion-tiposolicitud/creacion-tiposolicitud.component';
import { EdicionTiposolicitudComponent } from './tiposolicitud/edicion-tiposolicitud/edicion-tiposolicitud.component';
import { ListadoTiposolicitudComponent } from './tiposolicitud/listado-tiposolicitud/listado-tiposolicitud.component';
import { RemoverTiposolicitudComponent } from './tiposolicitud/remover-tiposolicitud/remover-tiposolicitud.component';
import { CreacionVinculacionComponent } from './vinculacion/creacion-vinculacion/creacion-vinculacion.component';
import { EdicionVinculacionComponent } from './vinculacion/edicion-vinculacion/edicion-vinculacion.component';
import { ListadoVinculacionComponent } from './vinculacion/listado-vinculacion/listado-vinculacion.component';
import { RemoverVinculacionComponent } from './vinculacion/remover-vinculacion/remover-vinculacion.component';

const routes: Routes = [
  {
    path: "creacion-facultad",
    component: CreacionFacultadComponent
  },
  {
    path: "edicion-facultad",
    component: EdicionFacultadComponent
  },
  {
    path: "listado-facultad",
    component: ListadoFacultadComponent
  },
  {
    path: "remover-facultad",
    component: RemoverFacultadComponent
  },
  {
    path: "creacion-departamento",
    component: CreacionDepartamentoComponent
  },
  {
    path: "edicion-departamento",
    component: EdicionDepartamentoComponent
  },
  {
    path: "listado-departamento",
    component: ListadoDepartamentoComponent
  },
  {
    path: "remover-departamento",
    component: RemoverDepartamentoComponent
  },
  {
    path: "creacion-vinculacion",
    component: CreacionVinculacionComponent
  },
  {
    path: "edicion-vinculacion",
    component: EdicionVinculacionComponent
  },
  {
    path: "listado-vinculacion",
    component: ListadoVinculacionComponent
  },
  {
    path: "remover-vinculacion",
    component: RemoverVinculacionComponent
  },
  {
    path: "creacion-proponente",
    component: CreacionProponenteComponent
  },
  {
    path: "edicion-proponente",
    component: EdicionProponenteComponent
  },
  {
    path: "listado-proponente",
    component: ListadoProponenteComponent
  },
  {
    path: "remover-proponente",
    component: RemoverProponenteComponent
  },
  {
    path: "creacion-jurado",
    component: CreacionJuradoComponent
  },
  {
    path: "edicion-jurado",
    component: EdicionJuradoComponent
  },
  {
    path: "listado-jurado",
    component: ListadoJuradoComponent
  },
  {
    path: "remover-jurado",
    component: RemoverJuradoComponent
  },
  {
    path: "creacion-areainvestigacion",
    component: CreacionAreainvestigacionComponent
  },
  {
    path: "edicion-areainvestigacion",
    component: EdicionAreainvestigacionComponent
  },
  {
    path: "listado-areainvestigacion",
    component: ListadoAreainvestigacionComponent
  },
  {
    path: "remover-areainvestigacion",
    component: RemoverAreainvestigacionComponent
  },
  {
    path: "creacion-modalidad",
    component: CreacionModalidadComponent
  },
  {
    path: "edicion-modalidad",
    component: EdicionModalidadComponent
  },
  {
    path: "listado-modalidad",
    component: ListadoModalidadComponent
  },
  {
    path: "remover-modalidad",
    component: RemoverModalidadComponent
  },
  {
    path: "creacion-tiposolicitud",
    component: CreacionTiposolicitudComponent
  },
  {
    path: "edicion-tiposolicitud",
    component: EdicionTiposolicitudComponent
  },
  {
    path: "listado-tiposolicitud",
    component: ListadoTiposolicitudComponent
  },
  {
    path: "remover-tiposolicitud",
    component: RemoverTiposolicitudComponent
  },
  {
    path: "creacion-comite",
    component: CreacionComiteComponent
  },
  {
    path: "edicion-comite",
    component: EdicionComiteComponent
  },
  {
    path: "listado-comite",
    component: ListadoComiteComponent
  },
  {
    path: "remover-comite",
    component: RemoverComiteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
