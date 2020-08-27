import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from 'primeng';
import {LandingPageComponent} from './landing-page.component';
import {LandingPageRoutingModule} from './landing-page-routing.module';
import {WelcomeScreenComponent} from './welcome-screen/welcome-screen.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LandingPageRoutingModule
  ],
  declarations: [
    LandingPageComponent,
    WelcomeScreenComponent
  ]
})
export class LandingPageModule { }
