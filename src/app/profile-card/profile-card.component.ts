import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  nom_club='UIR 17';
  a_propos='Club test affichage UIR 17';

  constructor() { }

  ngOnInit(): void {
  }

}
