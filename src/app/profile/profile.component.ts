
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Club } from '../club';
import { ClubServiceService } from '../club-service.service';
import { Publication } from '../publication';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  club: Club | undefined;
  idClub: number = 1;
  publications: Publication[] | undefined;

  constructor(private clubService: ClubServiceService,
    private router: Router,
    private route: ActivatedRoute,) {


    }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idClub = +params['idClub'];
   });
    this.clubService.getClubId(this.idClub).subscribe(res => {
      this.club=res;
    })
    this.publications=this.club?.publications;
  }

}
