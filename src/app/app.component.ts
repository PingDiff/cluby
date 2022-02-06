

import {Component} from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';
import {authConfig} from './auth.config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cluby';
  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig); // (1)
    this.oauthService.loadDiscoveryDocumentAndLogin(); // (2)

    this.oauthService.setupAutomaticSilentRefresh(); // (3)
}
}
