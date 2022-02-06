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
  clubId: number;
  clubName: string;
  clubPic: string;
  constructor(id_publication: number, date_pub: Date, down_vote: number, legende: string, media: string, publique: number, tag: string, up_vote: number, id_club: number, factures: Array<Facture>, clubName: string, clubPic: string){
    this.idPublication=id_publication;
    this.datePub=date_pub;
    this.downVote=down_vote;
    this.legende=legende;
    this.media=media;
    this.publique=publique;
    this.tag=tag;
    this.upVote=up_vote;
    this.clubId=id_club;
    this.clubName=clubName;
    this.clubPic=clubPic;
  }
}
