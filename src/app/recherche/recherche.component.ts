import { Component, OnInit } from '@angular/core';
import { Club } from '../club';
import { ClubServiceService } from '../club-service.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent implements OnInit {

  clubList:Club[]=[];

  constructor(private clubService: ClubServiceService) { }

  ngOnInit(): void {
    this.clubService.getAll().subscribe(res => {
      this.clubList = res;
    })
  }

}
