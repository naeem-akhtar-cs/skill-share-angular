import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SkillShareComponent } from './app.SkillShareComponent';
import { GMailComponent } from './app.GMailComponent';
import { AuthenticationSuccessfullComponent } from './app.AuthenticationSuccessfullComponent';
import { WelcomeComponent } from './app.WelcomeComponent';
import { MyLocationComponent } from './app.MyLocationComponent';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'location',
        component: MyLocationComponent,
      },
      {
        path: 'browse',
        component: SkillShareComponent,
      },
      {
        path: 'gmail',
        component: GMailComponent,
      },
      {
        path: 'AuthenticationSuccessfull',
        component: AuthenticationSuccessfullComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
