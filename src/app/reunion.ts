export class Reunion {
  idReunion: number;
  dateReaunion: Date;
  lieuReunion: string;
  sujet: string;
  idClub: number;
  constructor(idReunion: number, dateReunion: Date, lieuReunion: string, sujet: string, idCLub: number){
    this.idClub=idCLub;
    this.idReunion=idReunion;
    this.sujet=sujet;
    this.lieuReunion=lieuReunion;
    this.dateReaunion=dateReunion;
  }
}
