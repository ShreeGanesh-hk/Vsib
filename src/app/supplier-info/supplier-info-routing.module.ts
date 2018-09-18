import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SupplierInfoComponent} from './supplier-info.component';
import {SupplierComponent} from './supplier/supplier.component';
import { ScorecardComponent } from './scorecard/scorecard.component';

const routes: Routes = [
  {
    path: '',
    component: SupplierInfoComponent,
    children: [
        { path: 'Supplier-Info/Supplier', component:SupplierComponent  },
        { path: 'Supplier-Info/ScoreCard', component:ScorecardComponent  }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierInfoRoutingModule { }
