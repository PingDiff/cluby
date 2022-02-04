import { ClubSponsor } from "./club-sponsor";

export class Sponsor {
  idSponsor: number;
  nomSponsor: string;
  logoSponsor: string;
  clubsponsors: Array<ClubSponsor>;
  constructor(idSponsor: number, nomSponsor : string, logoSponsor : string , clubsponsors:Array<ClubSponsor>){
    this.idSponsor=idSponsor;
    this.nomSponsor=nomSponsor;
    this.logoSponsor=logoSponsor;
    this.clubsponsors=clubsponsors;
  }

}
