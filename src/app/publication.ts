import { Facture } from "./facture";

export class Publication {
  idPublication: number;
  publique: number;
  media: string;
  tag: string;
  datePub: Date;
  legende: string;
  upVote: number;
  downVote: number;
  idClub: number;
  constructor(id_publication: number, date_pub: Date, down_vote: number, legende: string, media: string, publique: number, tag: string, up_vote: number, id_club: number, factures: Array<Facture>){
    this.idPublication=id_publication;
    this.datePub=date_pub;
    this.downVote=down_vote;
    this.legende=legende;
    this.media=media;
    this.publique=publique;
    this.tag=tag;
    this.upVote=up_vote;
    this.idClub=id_club;
  }
}
