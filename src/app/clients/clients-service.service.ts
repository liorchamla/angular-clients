import { DataStorageService } from './../shared/data-storage.service';
import { Injectable } from '@angular/core';
import { Client } from '../shared/client';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ClientsServiceService {

  clientsChanged = new Subject<Client[]>();

  clients = [];

  setClients(clients){
    this.clients = clients;
    this.clientsChanged.next(this.getClients());
  }

  getClients(){
    return this.clients.slice();
  }

  getClient(id: number){
    return this.clients.find(client => client.id === id);
  }

  updateClient(client: Client){
    const index = this.clients.findIndex(_client => _client.id === client.id);
    this.clients[index] = client;
    this.clientsChanged.next(this.getClients());
  }

  removeClient(id: number){
    this.clients.splice(this.clients.findIndex(client => client.id === id), 1);
    this.clientsChanged.next(this.getClients());
  }

  addClient(client){
    if(!client.id) {
      client.id = Date.now();
    }
    this.clients.push(client);
    this.clientsChanged.next(this.getClients());
  }

  constructor() {}

}
