import { BrowserModule } from '@angular/platform-browser';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
// import { PickerModule } from '../../node_modules/emoji-mart'
// import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatListModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { AuthGuard } from './gaurd/auth.guard';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { MatDialogModule, MatTableModule, MatProgressSpinnerModule, MatNativeDateModule } from '@angular/material';
import { ProfileComponent } from './components/profile/profile.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SnotifyModule, SnotifyService, ToastDefaults } from '../../node_modules/ng-snotify';
import { PagelayoutComponent } from './components/pagelayout/pagelayout.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { RefinedByComponent } from './components/refined-by/refined-by.component';
import { PeopleComponent } from './components/people/people.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { SearchInfoComponent } from './components/search-info/search-info.component';
import { SpLangComponent } from './components/myprofilepopus/sp-lang/sp-lang.component';
import { NetworksComponent } from './components/myprofilepopus/networks/networks.component';
import { ExperianceComponent } from './components/myprofilepopus/experiance/experiance.component';
import { IntrHobbiesComponent } from './components/myprofilepopus/intr-hobbies/intr-hobbies.component';
import { EducationComponent } from './components/myprofilepopus/education/education.component';
import { CompworkedComponent } from './components/myprofilepopus/compworked/compworked.component';
import { CertificateComponent } from './components/myprofilepopus/certificate/certificate.component';
import { CustomFormsModule } from 'ngx-custom-validators';
import { TradeComponent } from './components/myprofilepopus/trade/trade.component';
import { CommunitesComponent } from './components/myprofilepopus/communites/communites.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UserIdleModule } from 'angular-user-idle';
import { ChartsComponent } from './components/charts/charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PickerModule } from '@ctrl/ngx-emoji-mart'
import { CalenderComponent } from './components/calender/calender.component';
import { AxiomSchedulerModule } from 'axiom-scheduler';
import { EditEventComponent } from './components/calender/edit-event/edit-event.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
// import { MatColorPickerModule } from 'mat-color-picker';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {EventDescriptionComponent} from './components/calender/event-description/event-description.component'
// import { MatFileUploadModule } from '../../node_modules/angular-file-upload';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { I1, I2 } from '././intercepter/intercepter';
import {TranslateMessageFormatCompiler} from 'ngx-translate-messageformat-compiler';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    LoginComponent,
    ProfileComponent,
    PagelayoutComponent,
    SearchFieldComponent,
    RefinedByComponent,
    PeopleComponent,
    PeopleListComponent,
    SearchInfoComponent,
    // EventDescriptionComponent,
    SpLangComponent,
    NetworksComponent,
    ExperianceComponent,
    IntrHobbiesComponent,
    EducationComponent,
    CompworkedComponent,
    CertificateComponent,
    TradeComponent,
    CommunitesComponent,
    RegistrationComponent,
    ChartsComponent,
    CalenderComponent,
    EditEventComponent
  ],
  imports: [
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserModule,
    NgxChartsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    // BrowserAnimationsModule,
    AxiomSchedulerModule,
    SnotifyModule,
    PickerModule,
    // MatFileUploadModule,
    HttpClientModule,
    // MatColorPickerModule,
    CustomFormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatGridListModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    AppRoutingModule,
    MatDialogModule,
    MatTableModule,
    MatProgressSpinnerModule,
    RouterModule,
    UserIdleModule.forRoot({ idle: 600, timeout: 300, ping: 120 })

  ],

  providers: [AuthGuard, { provide: 'SnotifyToastConfig', useValue: ToastDefaults }, { provide: LocationStrategy, useClass: HashLocationStrategy }, SnotifyService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: I1,
    multi: true
},
{
    provide: HTTP_INTERCEPTORS,
    useClass: I2,
    multi: true
}],
  bootstrap: [AppComponent]
})
export class AppModule {
  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

