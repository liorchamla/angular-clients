import { ClientsServiceService } from './../clients-service.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../../shared/client';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {
  clients: Client[] = [];

  constructor(private clientsService: ClientsServiceService) { }

  ngOnInit() {
    this.clientsService.clientsChanged.subscribe((clients: Client[]) => {
      this.clients = clients;
    })

    this.clients = this.clientsService.getClients();
  }

}
