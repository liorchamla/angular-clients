import { AuthService } from './auth/auth.service';
import { DataStorageService } from './shared/data-storage.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { ClientEditComponent } from './clients/client-edit/client-edit.component';
import { ClientsListComponent } from './clients/clients-list/clients-list.component';
import { FacturesComponent } from './factures/factures.component';
import { FacturesListComponent } from './factures/factures-list/factures-list.component';
import { FactureEditComponent } from './factures/facture-edit/facture-edit.component';
import { ClientStartComponent } from './clients/client-start/client-start.component';
import { FacturesServiceService } from './factures/factures-service.service';
import { ClientsServiceService } from './clients/clients-service.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FactureStartComponent } from './factures/facture-start/facture-start.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule, BrowserAnimationsModule, HttpModule ],
  declarations: [ AppComponent,
                  DropdownDirective,
                  HelloComponent,
                  ClientsComponent,
                  ClientDetailsComponent,
                  ClientEditComponent,
                  ClientsListComponent,
                  FacturesComponent,
                  FacturesListComponent,
                  FactureEditComponent,
                  ClientStartComponent,
                  HeaderComponent,
                  FactureStartComponent,
                  SignupComponent,
                  SigninComponent,
  ],
  bootstrap:    [ AppComponent ],
  providers: [FacturesServiceService, ClientsServiceService, DataStorageService, AuthService]
})
export class AppModule { }
