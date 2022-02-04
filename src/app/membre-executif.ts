import { AdherentsClub } from "./adherents-club";
import { DemandeAdhesion } from "./demande-adhesion";
import { DemandeCreationClub } from "./demande-creation-club";
import { Etudiant } from "./etudiant";

export class MembreExecutif extends Etudiant{
  role: string;
  constructor(role: string, codeEtudiant: string, isAdherent: number, demandecreationclub: Array<DemandeCreationClub>, demandeadhesion: Array<DemandeAdhesion>, adherents : Array<AdherentsClub>){
    super(codeEtudiant, isAdherent, demandecreationclub, demandeadhesion, adherents);
    this.role=role;
  }
}
