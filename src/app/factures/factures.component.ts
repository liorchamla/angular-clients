import { fadeInAnimation } from './../animations/index';
import { ClientsServiceService } from './../clients/clients-service.service';
import { FacturesServiceService } from './factures-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css'],
  animations: [fadeInAnimation],
})
export class FacturesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
