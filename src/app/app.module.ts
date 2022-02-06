import { Injectable, NgModule } from '@angular/core';
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
import { HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { OAuthModule } from 'angular-oauth2-oidc';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';


@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

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
    LoginComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['http://localhost:8080/post/publicPosts'],
        sendAccessToken: true
      }
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
