import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { SkillShareComponent } from './app.SkillShareComponent';
import { HeaderComponent } from './app.HeaderComponent';
import { BodyComponent } from './app.BodyComponent';
import { FooterComponent } from './app.FooterComponent';
import { ServicesComponent } from './app.ServicesComponent';
import { ButtonPanelComponent } from './app.ButtonPanelComponent';
import { BottomComponent } from './app.BottomComponent';
import { MiddleComponent } from './app.MiddleComponent';
import { TopComponent } from './app.TopComponent';
import { MainBodyComponent } from './app.MainBodyComponent';
import { RouteComponent } from './app.RouteComponent';
import { GMailComponent } from './app.GMailComponent';
import { AuthenticationSuccessfullComponent } from './app.AuthenticationSuccessfullComponent';
import { WelcomeComponent } from './app.WelcomeComponent';
import { MyLocationComponent } from './app.MyLocationComponent';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SkillShareComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ButtonPanelComponent,
    MainBodyComponent,
    BottomComponent,
    MiddleComponent,
    TopComponent,
    ServicesComponent,
    RouteComponent,
    GMailComponent,
    AuthenticationSuccessfullComponent,
    WelcomeComponent,
    MyLocationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            provide: 'SocialAuthServiceConfig',
            useValue: {
              autoLogin: false,
              providers: [],
            } as SocialAuthServiceConfig,
          },
        ],
      },
    },
  ],
  bootstrap: [RouteComponent],
})
export class AppModule {}
