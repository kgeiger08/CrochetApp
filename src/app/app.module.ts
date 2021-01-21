import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { StitchesComponent } from './stitches/stitches.component';
import { StitchDetailComponent } from './stitches/stitch-detail/stitch-detail.component';
import { YarnTypesComponent } from './yarn-types/yarn-types.component';
import { YarnDetailComponent } from './yarn-types/yarn-detail/yarn-detail.component';
import { NewsletterFormComponent } from './newsletter-form/newsletter-form.component';
import { LocationsComponent } from './locations/locations.component';
import { StitchCounterComponent } from './stitch-counter/stitch-counter.component';
import { HomeComponent } from './home/home.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'stitches', component: StitchesComponent },
  { path: 'stitch-counter', component: StitchCounterComponent },
  { path: 'yarn-types', component: YarnTypesComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'newsletter-signup', component: NewsletterFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    StitchesComponent,
    StitchDetailComponent,
    YarnTypesComponent,
    YarnDetailComponent,
    NewsletterFormComponent,
    LocationsComponent,
    StitchCounterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
