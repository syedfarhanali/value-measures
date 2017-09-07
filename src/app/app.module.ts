import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ChartModule } from 'angular-highcharts';
import { AppComponent } from './app.component';

import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { MeasuresComponent } from './measures/measures.component';
import { ChartComponent } from './chart/chart.component';

import { VmService } from './services/vm.service';
import { AnalyticsService } from './services/analytics.service';
import { ProjectService } from './services/project.service';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    LeftsidebarComponent,
    ContentComponent,
    HeaderComponent,
    PageNotFoundComponent,
    FooterComponent,
    DashboardComponent,
    UsersComponent,
    ProjectsComponent,
    AnalyticsComponent,
    MeasuresComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [
    VmService,
    AnalyticsService,
    UserService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
