
import { MsalService, MsalBroadcastService, MSAL_GUARD_CONFIG, MsalGuardConfiguration } from '@azure/msal-angular';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { InteractionStatus, PopupRequest, RedirectRequest } from '@azure/msal-browser';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'cluby';
  /*constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig); // (1)
    this.oauthService.loadDiscoveryDocumentAndLogin(); // (2)

    this.oauthService.setupAutomaticSilentRefresh(); // (3)
}*/
isIframe = false;
loginDisplay = false;
private readonly _destroying$ = new Subject<void>();

constructor(@Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration, private broadcastService: MsalBroadcastService, private authService: MsalService) { }

ngOnInit() {
  this.isIframe = window !== window.parent && !window.opener;

  this.broadcastService.inProgress$
  .pipe(
    filter((status: InteractionStatus) => status === InteractionStatus.None),
    takeUntil(this._destroying$)
  )
  .subscribe(() => {
    this.setLoginDisplay();
  })
}

login() {
  if (this.msalGuardConfig.authRequest){
    this.authService.loginPopup({...this.msalGuardConfig.authRequest} as PopupRequest)
      .subscribe({
        next: (result) => {
          console.log(result);
          this.setLoginDisplay();
        },
        error: (error) => console.log(error)
      });
  } else {
    this.authService.loginPopup()
      .subscribe({
        next: (result) => {
          console.log(result);
          this.setLoginDisplay();
        },
        error: (error) => console.log(error)
      });
  }
}

logout() { // Add log out function here
  this.authService.logoutPopup({
    mainWindowRedirectUri: "/login"
  });
}

setLoginDisplay() {
  this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
}

ngOnDestroy(): void {
  this._destroying$.next(undefined);
  this._destroying$.complete();
}
}
