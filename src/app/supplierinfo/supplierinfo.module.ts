import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SupplierinfoComponent } from './supplierinfo.component';
import { GeneralinfoComponent } from './generalinfo/generalinfo.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { SuppliestoComponent } from './suppliesto/suppliesto.component';
import { PurchasersComponent } from './purchasers/purchasers.component';
import {SidebarComponent} from '../shared/sidebar/sidebar.component';
import {LayoutModule} from '../layout/layout.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SupplierComponent } from './supplier/supplier.component';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    LayoutModule,
    NgbModule
  ],
  declarations: [SupplierinfoComponent, GeneralinfoComponent,SidebarComponent, CertificatesComponent, SuppliestoComponent, PurchasersComponent, SupplierComponent]
})
export class SupplierinfoModule { }
