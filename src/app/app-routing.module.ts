import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SupplierinfoComponent} from './supplierinfo/supplierinfo.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'SuppilerInfo',component:SupplierinfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
