import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ProfileComponent } from './profile/profile.component';
import { ExecSpaceComponent } from './exec-space/exec-space.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '#', component: TimelineComponent },
  { path: '', component: TimelineComponent },
  { path: 'feed', component: TimelineComponent },
  { path: 'search', component: RechercheComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'myspace', component: ExecSpaceComponent },
  { path: 'profile/:idClub', component: ProfileComponent },
  { path: 'login', component: LoginComponent},
  { path: 'test', component: TestComponent},
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
