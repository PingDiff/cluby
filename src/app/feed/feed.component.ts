import { Component, OnInit } from '@angular/core';
import { Publication } from '../publication';
import { PublicationService } from '../publication.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
