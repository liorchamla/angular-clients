import { Subject } from 'rxjs/Subject';
import { Injectable, EventEmitter } from '@angular/core';
import { Facture } from '../shared/facture';

@Injectable()
export class FacturesServiceService {
  factures: Facture[] = [
    new Facture('FA01', 1, 2000, '2017-10-10', 'reglee'),
    new Facture('FA02', 1, 1000, '2017-10-08', 'retard'),
    new Facture('FA03', 2, 4000, '2017-11-10', 'envoyee')
  ];

  facturesChanged = new Subject<Facture[]>();

  getChrono(){
    const last = this.factures.map(facture => Number(facture.numero.replace('FA', ''))).sort((a, b) => a - b).pop() + 1;
    return this.formatChrono(last);
  }

  formatChrono(chrono){
    return 'FA' + (chrono < 10 ? '0' + chrono : chrono);
  }

  getFacturesFromClient(clientId: number){
    return this.factures.filter(facture => facture.client == clientId);
  }

  getFactures(): Facture[] {
    return this.factures.slice();
  }

  getFacture(numero: string){
    return this.factures.find(facture => facture.numero === numero);
  }

  addFacture(facture: Facture){
    this.factures.push(facture);
    this.facturesChanged.next(this.getFactures());
  }

  removeFacture(numero: string){
    this.factures.splice(this.factures.findIndex(facture => facture.numero === numero), 1);
    this.facturesChanged.next(this.getFactures());
  }

  updateFacture(facture: Facture){
    const index = this.factures.findIndex(_facture => _facture.numero === facture.numero);
    this.factures[index] = facture;
    this.facturesChanged.next(this.getFactures());
  }

  constructor() { }

}
