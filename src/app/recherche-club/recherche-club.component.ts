import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Club } from '../club';
import { ClubServiceService } from '../club-service.service';

@Component({
  selector: 'app-recherche-club',
  templateUrl: './recherche-club.component.html',
  styleUrls: ['./recherche-club.component.scss']
})
export class RechercheClubComponent implements OnInit {

  clubList:Club[]=[];

  constructor(private clubService: ClubServiceService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.clubService.getAll().subscribe(res => {
      this.clubList = res;
    })
  }
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
}

}
