import { SigninComponent } from './../auth/signin/signin.component';
import { SignupComponent } from './../auth/signup/signup.component';
import { FactureEditComponent } from './../factures/facture-edit/facture-edit.component';
import { FactureStartComponent } from './../factures/facture-start/facture-start.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import {ClientsComponent} from '../clients/clients.component'
import {ClientStartComponent} from '../clients/client-start/client-start.component'
import {ClientDetailsComponent} from '../clients/client-details/client-details.component'
import {ClientEditComponent} from '../clients/client-edit/client-edit.component'

import {FacturesComponent} from '../factures/factures.component'

const appRoutes: Routes = [
  {path: '', redirectTo: 'clients', pathMatch: 'full'},
  {path: 'clients', component: ClientsComponent,  children: [
    {path: '', component: ClientStartComponent },
    {path: 'new', component: ClientEditComponent, pathMatch: 'full'},
    {path: ':id', component: ClientDetailsComponent},
    {path: ':id/edit', component: ClientEditComponent},
  ]},
  {path: 'factures', component: FacturesComponent, children: [
    {path: '', component: FactureStartComponent},
    {path: 'new', component: FactureEditComponent, pathMatch: 'full'},
    {path: 'new/:clientId', component: FactureEditComponent},
    {path: ':id', component: FactureEditComponent},
  ]},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
