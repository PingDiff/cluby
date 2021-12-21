import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';
import { RechercheComponent } from './recherche/recherche.component';


const routes: Routes = [
  { path: 'feed', component: TimelineComponent },
  { path: 'search', component: RechercheComponent },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
