import { Client } from './../../shared/client';
import { FacturesServiceService } from './../factures-service.service';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Facture } from './../../shared/facture';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ClientsServiceService } from './../../clients/clients-service.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-facture-edit',
  templateUrl: './facture-edit.component.html',
  styleUrls: ['./facture-edit.component.css']
})
export class FactureEditComponent implements OnInit {
  editing = false;
  numero: string;
  clientId: number;
  factureForm: FormGroup;
  clients: Client[] = [];

  constructor(private facturesService: FacturesServiceService ,private clientsService: ClientsServiceService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.facturesService.getChrono();

    this.clients = this.clientsService.getClients();

    this.route.params.subscribe((params: Params) => {
      this.numero = params['id'];
      this.clientId = +params['clientId'];
      this.editing = this.numero != null;
      this.createForm();
    })
  }

  onCancel(){
    if(this.clientId){
      this.router.navigate(['/clients', this.clientId]);
    } else {
      this.router.navigate(['../'], {relativeTo: this.route})
    }
  }

  onSubmit(){
    if(this.factureForm.valid){
      const value = this.factureForm.value
      let facture: Facture;
      if(this.editing){
        facture = new Facture(this.numero, +value.client, +value.montant, value.date, value.statut);
        this.facturesService.updateFacture(facture);
      } else {
        const numero = this.facturesService.getChrono();
        facture = new Facture(numero, +value.client, +value.montant, value.date, value.statut);
        this.facturesService.addFacture(facture);
      }
      this.onCancel();
    }
  }

  createForm(){

    let montant, client, numero, date, statut;

    if(this.clientId){
      client = this.clientId
    }

    if(this.editing){
      const facture = this.facturesService.getFacture(this.numero);
      ({montant, client, date, statut} = facture)
    }

    this.factureForm = new FormGroup({
      montant: new FormControl(montant, Validators.required),
      client: new FormControl(client, Validators.required),
      date: new FormControl(date, Validators.required),
      statut: new FormControl(statut, Validators.required)
    })
  }

}
