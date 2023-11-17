import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PlanComponent } from './components/plan/plan.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { InnerpagesComponent } from './components/innerpages/innerpages.component';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { BeanTypeComponent } from './components/bean-type/bean-type.component';
import { QuantityComponent } from './components/quantity/quantity.component';
import { GrindComponent } from './components/grind/grind.component';
import { DeliveriesComponent } from './components/deliveries/deliveries.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    PlanComponent,
    LandingpageComponent,
    InnerpagesComponent,
    PreferencesComponent,
    BeanTypeComponent,
    QuantityComponent,
    GrindComponent,
    DeliveriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
