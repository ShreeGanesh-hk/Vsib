import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import {LoginModule} from './login/login.module';
import {HomeModule} from './home/home.module';
import { SupplierComponent } from './supplier/supplier.component';
import { SearchComponent } from './supplier/search/search.component';
import { SidemenuComponent } from './supplier/sidemenu/sidemenu.component';

@NgModule({
  declarations: [
    AppComponent,
    SupplierComponent,
    SearchComponent,
    SidemenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    LoginModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
