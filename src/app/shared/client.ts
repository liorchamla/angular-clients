export class Client {
  nom: string;
  prenom: string;
  ville: string;
  total: number = 0;
  avatar: string;
  id: number;
  notes: {date: string, contenu: string}[] = [];

  constructor(nom: string = '', prenom: string = '', ville: string = '', avatar: string = '', notes: {date: string, contenu: string}[] = [], id: number = 0){
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.ville = ville;
    this.avatar = avatar;
    this.notes = notes;
  }
}
