import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { SupplierInfoRoutingModule } from './supplier-info-routing.module';
import { SupplierInfoComponent } from './supplier-info.component';
import {LayoutModule} from '../layout/layout.module';
import {SidebarModule} from '../shared/sidebar/sidebar.module';
import {SupplierComponent} from './supplier/supplier.component';
import { GeneralinfoComponent } from './supplier/generalinfo/generalinfo.component';
import { CertificatesComponent } from './supplier/certificates/certificates.component';
import { SuppliestoComponent } from './supplier/suppliesto/suppliesto.component';
import { PurchasersComponent } from './supplier/purchasers/purchasers.component';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    LayoutModule,
    NgbModule,
    SidebarModule,
    SupplierInfoRoutingModule
  ],
  declarations: [SupplierInfoComponent,SupplierComponent,GeneralinfoComponent,PurchasersComponent,SuppliestoComponent,CertificatesComponent]
})
export class SupplierInfoModule { }
