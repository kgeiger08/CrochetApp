import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { StitchesComponent } from './stitches/stitches.component';
import { StitchDetailComponent } from './stitches/stitch-detail/stitch-detail.component';
import { YarnTypesComponent } from './yarn-types/yarn-types.component';
import { YarnDetailComponent } from './yarn-types/yarn-detail/yarn-detail.component';
import { NewsletterFormComponent } from './newsletter-form/newsletter-form.component';
import { LocationsComponent } from './locations/locations.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    StitchesComponent,
    StitchDetailComponent,
    YarnTypesComponent,
    YarnDetailComponent,
    NewsletterFormComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
