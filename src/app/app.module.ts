import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';

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
import { StitchListComponent } from './stitches/stitch-list/stitch-list.component';
import { StitchTypeComponent } from './stitches/stitch-type/stitch-type.component';
import { StitchService } from './stitches/stitch.service';
import { StitchDetailService } from './stitches/stitch-detail.service';
import { VisualInspirationComponent } from './visual-inspiration/visual-inspiration.component';
import { FetchImageService } from './visual-inspiration/fetchImage.service';
import { TypeOfYarnComponent } from './yarn-types/type-of-yarn/type-of-yarn.component';
import { YarnListComponent } from './yarn-types/yarn-list/yarn-list.component';
import { YarnService } from './yarn-types/yarn.service';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'stitches', component: StitchesComponent },
  { path: 'stitches/:id', component: StitchDetailComponent },
  { path: 'stitch-counter', component: StitchCounterComponent },
  { path: 'yarn-types', component: YarnTypesComponent },
  { path: 'visual-inspiration', component: VisualInspirationComponent },
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
    HomeComponent,
    StitchListComponent,
    StitchTypeComponent,
    VisualInspirationComponent,
    TypeOfYarnComponent,
    YarnListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    GoogleMapsModule
  ],
  providers: [StitchService, StitchDetailService, FetchImageService, YarnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
