import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import {LoginModule} from './login/login.module';
import {HomeModule} from './home/home.module';
import {SupplierinfoModule} from './supplierinfo/supplierinfo.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    LoginModule,
    HomeModule,
    SupplierinfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
