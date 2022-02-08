import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ProfileComponent } from './profile/profile.component';
import { ExecSpaceComponent } from './exec-space/exec-space.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { MsalGuard } from '@azure/msal-angular';

const routes: Routes = [
  { path: 'feed', component: TimelineComponent,
  canActivate: [MsalGuard] },
  { path: 'search', component: RechercheComponent,
  canActivate: [MsalGuard] },
  { path: 'profile', component: ProfileComponent,
  canActivate: [MsalGuard] },
  { path: 'myspace', component: ExecSpaceComponent,
  canActivate: [MsalGuard] },
  { path: 'profile/:idClub', component: ProfileComponent },
  { path: 'login', component: LoginComponent},
  { path: 'test', component: TestComponent,
  canActivate: [MsalGuard]},
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: !isIframe ? 'enabled' : 'disabled' // Don't perform initial navigation in iframes
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
