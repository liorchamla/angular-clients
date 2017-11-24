import { DataStorageService } from './shared/data-storage.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent  implements OnInit{
  name = 'Angular 5';

  constructor(private dataStorageService: DataStorageService){}

  ngOnInit(){
    this.dataStorageService.getClients();
  }
}
