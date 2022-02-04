

export class DemandeAdhesion {
  idEtudiant: number;
  idClub: number;
  statut: string;
  dateSoumission: Date;
  constructor(idEtudiant: number, idClub: number, statut: string, dateSoumission: Date){
    this.idClub=idClub;
    this.idEtudiant=idEtudiant;
    this.statut=statut;
    this.dateSoumission=dateSoumission;
  }
}
