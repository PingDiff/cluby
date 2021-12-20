import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FeedComponent } from './feed/feed.component';
import { PublicationComponent } from './publication/publication.component';
import { CarteClubComponent } from './carte-club/carte-club.component';
import { RechercheClubComponent } from './recherche-club/recherche-club.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FeedComponent,
    PublicationComponent,
    CarteClubComponent,
    RechercheClubComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
