import { fadeInAnimation } from './../animations/index';
import { Component, OnInit } from '@angular/core';
import {ClientsServiceService} from './clients-service.service'
import {Client} from '../shared/client';
@Component({
  moduleId: module.id.toString(),
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  providers: [],
  animations: [fadeInAnimation],
})
export class ClientsComponent implements OnInit {

  constructor() { }

  ngOnInit(){

  }
}
