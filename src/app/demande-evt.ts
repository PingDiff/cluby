

export class DemandeEvt {
  idDemEvt: number;
  statut: string;
  pjEvt: string;
  dateSoumission: Date;
  constructor(idDemEvt: number, statut: string, pjEvt: string, dateSoumission: Date){
    this.dateSoumission=dateSoumission;
    this.idDemEvt=idDemEvt;
    this.statut=statut;
    this.pjEvt=pjEvt;
  }
}
