import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroSectionComponent } from './shared/components/hero-section/hero-section.component';
import { FeaturesComponent } from './shared/components/features/features.component';
import { ContactUsComponent } from './shared/components/contact-us/contact-us.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    FeaturesComponent,
    ContactUsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
