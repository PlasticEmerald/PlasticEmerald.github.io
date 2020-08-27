import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './landing-page.component';
import {NgModule} from '@angular/core';
import {WelcomeScreenComponent} from './welcome-screen/welcome-screen.component';

const routes: Routes = [
  {
    path: '', component: LandingPageComponent, children: [
      {path: '', component: WelcomeScreenComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
