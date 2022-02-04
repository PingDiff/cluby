import { HttpErrorResponse } from '@angular/common/http';
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

  ngOnInit() {
    this.getClub;
  }
  getClub(){
    this.clubService.getAll()//.subscribe((res:Club[])=>{this.clubList=res},(error:HttpErrorResponse)=>{alert(error.status)})
  }

}
