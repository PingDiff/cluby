export class Utilisateur {
  idUtilisateur: number;
  login: string;
  motDePasse: string;
  nom: string;
  prenom: string;
  photoUtilisateur: string;
  constructor(idUtilisateur: number, login: string, motDePasse: string, nom: string, prenom: string, photoUtilisateur: string){
    this.idUtilisateur=idUtilisateur;
    this.nom=nom;
    this.prenom=prenom;
    this.login=login;
    this.motDePasse=motDePasse;
    this.photoUtilisateur=photoUtilisateur;
  }
}
