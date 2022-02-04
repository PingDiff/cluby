

export class Facture {
  idFacture: number;
  pjFacture: string;
  montant: number;
  constructor(idFacture: number, pjFacture: string, montant: number){
    this.idFacture=idFacture;
    this.pjFacture=pjFacture;
    this.montant=montant;
  }
}
