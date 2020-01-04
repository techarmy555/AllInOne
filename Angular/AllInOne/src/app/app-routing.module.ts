import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PagelayoutComponent } from './components/pagelayout/pagelayout.component';
import { PeopleComponent } from './components/people/people.component';
import { AuthGuard } from './gaurd/auth.guard';
import { RegistrationComponent } from './components/registration/registration.component';
import { ChartsComponent } from './components/charts/charts.component';
import { CalenderComponent } from './components/calender/calender.component';

// const routes: Routes = [
//   {
//     path: '', component: LandingComponent,canActivate: [AuthGuard],
//     // path: '', component: LandingComponent,
//     children: [
//       { path: '', component: SearchComponent },
//       { path: 'search', component: SearchComponent },
//       { path: 'myprofile', component: ProfileComponent },
//       // { path: 'people/:name', component: PeoplesComponent },
//       { path: 'people', component: readyclientComponent }
//       // { path: '**', component: PeoplesComponent }
//     ]
//   },
//   { path: 'login', component: LoginComponent },
//   { path: '**', component: LandingComponent},
//   // { path: '**', component: not-found },
// ];

const appRoutes: Routes = [

  {
    path: '',
    component: PagelayoutComponent,

    children: [
      { path: 'people', component: PeopleComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent },
      // { path: 'landing', component: LandingComponent, canActivateChild: [AuthGuard] },
      { path: 'landing', component: LandingComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'calender', component: CalenderComponent },
      { path: 'myprofile', component: ProfileComponent},
      // { path: 'myprofile', component: ProfileComponent},
      { path: '', redirectTo: 'login', pathMatch: 'full' },

    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes, { useHash: true }
      // { enableTracing: false } // <-- debugging purposes only
    )
  ],
  declarations: []
})
export class AppRoutingModule { }
export const routingcomponent = [LandingComponent, LoginComponent, ProfileComponent, PeopleComponent];

