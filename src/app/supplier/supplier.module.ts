import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from './supplier.component';
import { SearchComponent } from './search/search.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SupplierComponent,SearchComponent, SidemenuComponent]
})
export class SupplierModule { }
