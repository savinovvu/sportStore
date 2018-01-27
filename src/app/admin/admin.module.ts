import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AuthGuard} from './auth.guard';


let routing = RouterModule.forChild([
  {path: 'auth', component: AuthComponent},
  {path: 'main', component: AdminComponent, canActivate:[AuthGuard]},
  {path: '', redirectTo: 'auth'},
]);

@NgModule({
  imports: [
    CommonModule, FormsModule, routing
  ],
  providers:[AuthGuard],
  declarations: [AuthComponent, AdminComponent]
})
export class AdminModule { }
