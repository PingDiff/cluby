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
import { HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';

import { MsalModule, MsalRedirectComponent, MsalGuard, MsalInterceptor  } from '@azure/msal-angular';
import { PublicClientApplication, InteractionType } from '@azure/msal-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";


const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: new HttpHeaders
      ({'X-Requested-With': 'XMLHttpRequest',
      "Access-Control-Allow-Origin":"*"})
     
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
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    FormsModule,
    MsalModule.forRoot( new PublicClientApplication({
      auth: {
        clientId: '8944eb75-406e-49c4-a5bd-cfb7dcbce26f', // This is your client ID
         // This is your tenant ID
         authority: "https://login.microsoftonline.com/3bd72a86-a8ea-44a6-a899-f3cccbedf027",
        redirectUri: 'http://localhost:4200/feed',// This is your redirect URI
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: isIE, // Set to true for Internet Explorer 11
      }
    }), {
      interactionType: InteractionType.Redirect, // MSAL Guard Configuration
      authRequest: {
        scopes: ['user.read']
      }
  }, {
    interactionType: InteractionType.Redirect, // MSAL Interceptor Configuration
    protectedResourceMap: new Map([ 
        ['https://graph.microsoft.com', ['User.Read']]
    ])
  })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    MsalGuard // MsalGuard added as provider here
  ],
  bootstrap: [AppComponent, MsalRedirectComponent]
})
export class AppModule { }
