import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarClaveComponent } from './general/cambiar-clave/cambiar-clave.component';
import { LoginComponent } from './general/login/login.component';
import { LogoutComponent } from './general/logout/logout.component';
import { ResetClaveComponent } from './general/reset-clave/reset-clave.component';
import { CreacionUsuarioComponent } from './usuarios/creacion-usuario/creacion-usuario.component';
import { EdicionUsuarioComponent } from './usuarios/edicion-usuario/edicion-usuario.component';
import { ListadoUsuarioComponent } from './usuarios/listado-usuario/listado-usuario.component';
import { RemoverUsuarioComponent } from './usuarios/remover-usuario/remover-usuario.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "logout",
    component: LogoutComponent
  },
  {
    path: "cambiar-clave",
    component: CambiarClaveComponent
  },
  {
    path: "reset-clave",
    component: ResetClaveComponent
  },
  {
    path: "creacion-usuario",
    component: CreacionUsuarioComponent
  },
  {
    path: "edicion-usuario",
    component: EdicionUsuarioComponent
  },
  {
    path: "listado-usuario",
    component: ListadoUsuarioComponent
  },
  {
    path: "remover-usuario",
    component: RemoverUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
