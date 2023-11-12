import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerrorComponent } from './customerror/customerror.component';
const routes: Routes = [
  {
    path: '', redirectTo: 'Login', pathMatch: 'full'
  },
  {
    path: '**', component: CustomerrorComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
