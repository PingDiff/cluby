import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FeedComponent } from './feed/feed.component';
import { PublicationComponent } from './publication/publication.component';
import { CarteClubComponent } from './carte-club/carte-club.component';
import { RechercheClubComponent } from './recherche-club/recherche-club.component';
import { SearchbarHeaderComponent } from './searchbar-header/searchbar-header.component';
import { TimelineComponent } from './timeline/timeline.component';
import { RechercheComponent } from './recherche/recherche.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarExecSpaceComponent } from './sidebar-exec-space/sidebar-exec-space.component';
import { ExecSpaceComponent } from './exec-space/exec-space.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FeedComponent,
    PublicationComponent,
    CarteClubComponent,
    RechercheClubComponent,
    SearchbarHeaderComponent,
    TimelineComponent,
    RechercheComponent,
    ProfileCardComponent,
    ProfileComponent,
    SidebarExecSpaceComponent,
    ExecSpaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
