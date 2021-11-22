import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './public/error/not-found/not-found.component';
import { HomeComponent } from './public/general/home/home.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home"
  },
  {
    path: "seguridad",
    loadChildren: () => import("./modules/seguridad/seguridad.module").then(x => x.SeguridadModule)
  },
  {
    path: "parameters",
    loadChildren: () => import("./modules/parameters/parameters.module").then(x => x.ParametersModule)
  },
  {
    path: "solicitudes",
    loadChildren: () => import("./modules/solicitudes/solicitudes.module").then(x => x.SolicitudesModule)
  },
  {
    path: "reports",
    loadChildren: () => import("./modules/reports/reports.module").then(x => x.ReportsModule)
  },
  {
    path:"**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
