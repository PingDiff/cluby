import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte-club',
  templateUrl: './carte-club.component.html',
  styleUrls: ['./carte-club.component.scss']
})
export class CarteClubComponent implements OnInit {
  nom_club='UIR 17';

  constructor() { }

  ngOnInit(): void {
  }

}
