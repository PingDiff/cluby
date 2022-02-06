import { Component, OnInit } from '@angular/core';
import { Publication } from '../publication';
import { PublicationService } from '../publication.service';
import { Utilisateur } from '../utilisateur';
import { UtilisateurService } from '../utilisateur.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  publicationList: Publication[]=[];
  user: Utilisateur | undefined;


  constructor(private publicationService: PublicationService, private userService: UtilisateurService) { }

  ngOnInit(): void {
    this.publicationService.getAll().subscribe(res => {
      this.publicationList=res;
    })
    this.userService.login().subscribe(res => {
      console.log(res);
      this.user=res;
    })
  }

}
