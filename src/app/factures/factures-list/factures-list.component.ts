import { Facture } from './../../shared/facture';
import { FacturesServiceService } from './../factures-service.service';
import { ClientsServiceService } from './../../clients/clients-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factures-list',
  templateUrl: './factures-list.component.html',
  styleUrls: ['./factures-list.component.css']
})
export class FacturesListComponent implements OnInit {

  factures: Facture[] = [];

  constructor(private facturesService: FacturesServiceService, private clientsService: ClientsServiceService) { }

  getFacturesTotal(){
    return this.factures.reduce((acc, facture) => acc + facture.montant, 0);
  }

  getClientForFacture(id){
    const client = this.clientsService.getClient(id);
    return `${client.prenom} ${client.nom}`
  }

  ngOnInit() {
    this.factures = this.facturesService.getFactures();

    this.facturesService.facturesChanged.subscribe((factures: Facture[]) => {
      this.factures = factures;
    })
  }

}
