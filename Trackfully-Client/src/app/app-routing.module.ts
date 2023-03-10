import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppModule } from './app.module';
import { SymptomManagementFormComponent } from './symptom-management-form/symptom-management-form.component';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DailyTrackerFormComponent } from './daily-tracker-form/daily-tracker-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ChartsComponent } from './charts/charts.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './service/auth-guard.service';
import { AutheticationService } from './service/authentication/authetication.service';
import { AboutPageComponent } from './about-page/about-page.component';


const appRoutes: Routes = [
  { path: '', 
    component: LandingPageComponent
  },

  { path: 'symptom-manage-form', 
    component: SymptomManagementFormComponent,
    canActivate: [AuthGuardService]
  },



  { path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService]
  },

  {
    path: 'daily-tracker-form',
    component: DailyTrackerFormComponent,
    canActivate: [AuthGuardService]
  },

  {
    path: 'home',
    component:AppComponent
  },

  {
    path: 'test',
    component: TestComponent
  },
  
  {
    path: 'sign-up',
    component: SignUpPageComponent
  },

  {
    path: 'logout',
    component: LogoutComponent
  },

  {
    path: 'about',
    component: AboutPageComponent
  }

];

@NgModule({
  imports: [
      RouterModule.forRoot(appRoutes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
