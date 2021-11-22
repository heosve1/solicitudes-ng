import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { LoginComponent } from './general/login/login.component';
import { LogoutComponent } from './general/logout/logout.component';
import { CambiarClaveComponent } from './general/cambiar-clave/cambiar-clave.component';
import { ResetClaveComponent } from './general/reset-clave/reset-clave.component';
import { CreacionUsuarioComponent } from './usuarios/creacion-usuario/creacion-usuario.component';
import { EdicionUsuarioComponent } from './usuarios/edicion-usuario/edicion-usuario.component';
import { ListadoUsuarioComponent } from './usuarios/listado-usuario/listado-usuario.component';
import { RemoverUsuarioComponent } from './usuarios/remover-usuario/remover-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    CambiarClaveComponent,
    ResetClaveComponent,
    CreacionUsuarioComponent,
    EdicionUsuarioComponent,
    ListadoUsuarioComponent,
    RemoverUsuarioComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class SeguridadModule { }
