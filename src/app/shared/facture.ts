export class Facture {
  numero: string;
  date: string;
  montant: number;
  client: number;
  statut: string;
  status = {
    reglee: {label: "Réglée", className: "label-success"},
    retard: {label: "En retard", className: "label-danger"},
    envoyee: {label: "Envoyée", className: "label-primary"}
  }

  getStatusClassName(){
    return this.status[this.statut].className;
  }

  getStatusLabel(){
    return this.status[this.statut].label;
  }

  constructor(numero: string = '', client: number, montant: number, date: string, statut: string){
    this.numero = numero;
    this.client = client;
    this.montant = montant;
    this.date = date;
    this.statut = statut;
  }

}
