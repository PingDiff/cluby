import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {
  nom_club='UIR 17';
  date="16 December 2003 at 08:25";
  photo="../../assets/images/uir17.png";
  texte="This is random text in order to test the feature and it has to be long enough to fit on 2 lines or more to see how it behaves";
  upvotes=6;
  downvotes=8;

  constructor() { }

  ngOnInit(): void {
  }

}
