import { AdherentsClub } from "./adherents-club";
import { DemandeAdhesion } from "./demande-adhesion";
import { DemandeCreationClub } from "./demande-creation-club";

export class Etudiant {
  codeEtudiant: string;
  isAdherent: number;
  demandecreationclub: Array<DemandeCreationClub>;
  demandeadhesion: Array<DemandeAdhesion>;
  adherents : Array<AdherentsClub>;
  constructor(codeEtudiant: string, isAdherent: number, demandecreationclub: Array<DemandeCreationClub>, demandeadhesion: Array<DemandeAdhesion>, adherents : Array<AdherentsClub>){
    this.codeEtudiant=codeEtudiant;
    this.isAdherent=isAdherent;
    this.demandecreationclub=demandecreationclub;
    this.demandeadhesion=demandeadhesion;
    this.adherents=adherents;
  }
}
