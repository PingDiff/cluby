export class DemandeCreationClub {
  idDemandeCrea: number;
  statut: string;
  pjCreaClub: string;
  dateSoumission: Date;
  constructor(idDemandeCrea: number, statut: string, pjCreaClub: string, dataSoumission: Date){
    this.idDemandeCrea=idDemandeCrea;
    this.statut=statut;
    this.pjCreaClub=pjCreaClub;
    this.dateSoumission=dataSoumission;
  }
}
