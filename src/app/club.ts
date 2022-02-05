import { SafeResourceUrl } from "@angular/platform-browser";
import { AdherentsClub } from "./adherents-club";
import { ClubBudget } from "./club-budget";
import { ClubSponsor } from "./club-sponsor";
import { DemandeAdhesion } from "./demande-adhesion";
import { DemandeEvt } from "./demande-evt";
import { MembreExecutif } from "./membre-executif";
import { Publication } from "./publication";
import { Reunion } from "./reunion";


export class Club {
  idClub: number;
  selectif: number;
  actif: number;
  nomClub: string;
  logoClub: string;
  banniere: string;
  methRecrut: string;
  budgets: Array<ClubBudget>;
  sponsors: Array<ClubSponsor>;
  reunions: Array<Reunion>;
  publications: Array<Publication>;
  demandeevts: Array<DemandeEvt>;
  demadeadhesions: Array<DemandeAdhesion>;
  membreexecutifs: Array<MembreExecutif>;
  adherents: Array<AdherentsClub>;
  constructor(id: number, actif: number, banniere: string, logo_club: string, meth_recrutement: string, nom_club: string, selectif: number, budgets: Array<ClubBudget>, sponsors: Array<ClubSponsor>, reunions: Array<Reunion>, publications: Array<Publication>, demandeevts: Array<DemandeEvt>, demadeadhesions: Array<DemandeAdhesion>, membreexecutifs: Array<MembreExecutif>, adherents: Array<AdherentsClub>){
    this.actif=actif;
    this.idClub=id;
    this.methRecrut=meth_recrutement;
    this.nomClub=nom_club;
    this.banniere=banniere;
    this.selectif=selectif;
    this.logoClub=logo_club;
    this.budgets=budgets;
    this.sponsors=sponsors;
    this.reunions=reunions;
    this.publications=publications;
    this.demandeevts=demandeevts;
    this.demadeadhesions=demadeadhesions;
    this.membreexecutifs=membreexecutifs;
    this.adherents=adherents;
  }

}
