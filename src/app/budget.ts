import { ClubBudget } from "./club-budget";

export class Budget {
  idBudget: number;
  montant: number;
  annee: Date;
  clubbugets: Array<ClubBudget>;
  constructor(idBudget: number, montant: number, annee: Date, clubbudget: Array<ClubBudget>){
    this.idBudget=idBudget;
    this.annee= annee;
    this.clubbugets=clubbudget;
    this.montant=montant;
  }
}
