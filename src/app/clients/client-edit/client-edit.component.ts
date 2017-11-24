import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Client} from '../../shared/client'
import {ClientsServiceService} from '../clients-service.service'
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  editing = false;
  client: Client;
  id: number;
  clientForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private clientsService: ClientsServiceService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editing = params['id'] != null;
      this.createForm();
    })
  }

  private createForm(){
    let nom = '', prenom = '', ville = '', avatar = '', notes = new FormArray([]);

    if(this.editing){
      const client = this.clientsService.getClient(this.id);
      ({nom, prenom, ville, avatar} = client)

      if(client.notes){
        client.notes.forEach(note => {
          notes.push(new FormGroup({
            'date': new FormControl(note.date),
            'contenu': new FormControl(note.contenu)
          }))
        })
      }
    }

    this.clientForm = new FormGroup({
      nom: new FormControl(nom, Validators.required),
      prenom: new FormControl(prenom, Validators.required),
      ville: new FormControl(ville, Validators.required),
      avatar: new FormControl(avatar),
      notes: notes
    })
  }

  onAddNote(){
    (<FormArray>this.clientForm.get('notes')).push(new FormGroup({
      date: new FormControl(moment().format('Y-MM-D H:m:s'), Validators.required),
      contenu: new FormControl('', Validators.required)
    }))
  }

  onDeleteNote(index){
    (<FormArray>this.clientForm.get('notes')).removeAt(index)
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  onSubmit(){
    if(this.clientForm.valid){
      const value = this.clientForm.value
      if(this.editing){
        value.id = this.id;
        this.clientsService.updateClient(value);
      } else {
        this.clientsService.addClient(value);
      }
      this.onCancel();
    }
  }

}
