import { Component, OnInit } from '@angular/core';
import { Club } from '../club';
import { ClubServiceService } from '../club-service.service';

@Component({
  selector: 'app-recherche-club',
  templateUrl: './recherche-club.component.html',
  styleUrls: ['./recherche-club.component.scss']
})
export class RechercheClubComponent implements OnInit {

  constructor() { }

  ngOnInit(): void{
  }

}
