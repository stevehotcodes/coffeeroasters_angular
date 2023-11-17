import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { HomeComponent } from './components/home/home.component';
import { PlanComponent } from './components/plan/plan.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { InnerpagesComponent } from './components/innerpages/innerpages.component';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { BeanTypeComponent } from './components/bean-type/bean-type.component';
import { QuantityComponent } from './components/quantity/quantity.component';
import { GrindComponent } from './components/grind/grind.component';
import { DeliveriesComponent } from './components/deliveries/deliveries.component';

const routes: Routes = [
  // {path:"",component:LandingpageComponent},
  {path:"",component:HomeComponent},
  {path:"plan",component:PlanComponent},
  {path:"about",component:AboutUsComponent},
  {path:"innerpage",component:InnerpagesComponent,
    children:[
      {path:"preferences",component:PreferencesComponent},
      {path:"beantype",component:BeanTypeComponent},
      {path:"quantity",component:QuantityComponent},
      {path:"grind",component:GrindComponent},
      {path:"deliveries",component:DeliveriesComponent}
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
