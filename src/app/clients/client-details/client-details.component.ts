import { Facture } from './../../shared/facture';
import { FacturesServiceService } from './../../factures/factures-service.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { ClientsServiceService } from '../clients-service.service'
import { Client } from '../../shared/client';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  client: Client;
  factures: Facture[] = [];
  id: number;

  constructor(private facturesService: FacturesServiceService, private clientsService: ClientsServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.client = this.clientsService.getClient(this.id);
      this.factures = this.facturesService.getFacturesFromClient(this.id);
    })
  }

  getFacturesTotal(){
    return this.factures.reduce((acc, facture) => acc + facture.montant, 0);
  }

  onDelete(){
    if(window.confirm("Etes vous sur de vouloir supprimer ce client ? #WTF Bro ?!")){
      this.clientsService.removeClient(this.id);
      this.router.navigate(['../'], {relativeTo: this.route});
    }
  }

}
