import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistroComponent } from './components/registro/registro.component';
import { OrdenTrabajoComponent } from './components/orden-trabajo/orden-trabajo.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login-form', component: LoginFormComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'orden-trabajo', component: OrdenTrabajoComponent },
  { path: 'dashboard-admin', component: DashboardAdminComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

