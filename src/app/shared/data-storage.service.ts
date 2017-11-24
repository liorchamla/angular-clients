import { AuthService } from './../auth/auth.service';
import { ClientsServiceService } from './../clients/clients-service.service';
import { Injectable } from '@angular/core';
import { Http,  Response } from '@angular/http';
import { Client } from './client';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private clientsService: ClientsServiceService, private authService: AuthService){}

  storeClients(){
    return this.http.put('https://boite-a-recettes-4232d.firebaseio.com/clients.json', this.clientsService.getClients())
  }

  getClients(){
    this.authService.getToken()
      .then(
        (token: string) => {

        }
      )
    return this.http.get('https://boite-a-recettes-4232d.firebaseio.com/clients.json')
      .map((response: Response) => {
        const clients: Client[] = response.json();
        for(let client of clients){
          if(!client['notes']){
            client.notes = [];
          }
        }
        return clients;
      })
      .subscribe((clients: Client[]) => {
        this.clientsService.setClients(clients);
      })
  }
}
