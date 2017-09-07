import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { MeasuresComponent } from './measures/measures.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';


const appRoutes: Routes = [
/*  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  */
  {path: 'dashboard',component: DashboardComponent },
  {path: 'analytics',component: AnalyticsComponent },
  {path: 'measures',component: MeasuresComponent },
  {path: 'projects',component: ProjectsComponent },
  {path: 'users',component: UsersComponent },
  { path: '',component: ContentComponent, pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports : [
    RouterModule.forRoot(appRoutes)
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule{

}
