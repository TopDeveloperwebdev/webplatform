import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AdsComponent } from './ads/ads.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { AgmCoreModule } from '@agm/core';
import { EventComponent } from './event/event.component';
import { AngularFireModule } from '@angular/fire';

var firebaseConfig = {
  apiKey: "AIzaSyCZx6hTBKw-xTlhIpmY4MbfplMYDGkFSDA",
  authDomain: "runtrip-ar.firebaseapp.com",
  databaseURL: "https://runtrip-ar.firebaseio.com",
  projectId: "runtrip-ar",
  storageBucket: "runtrip-ar.appspot.com",
  messagingSenderId: "654028737360",
  appId: "1:654028737360:web:acee98dca94c09a8553a55",
  measurementId: "G-YD5S2HS061"
};

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    AdsComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,  
    AngularFireModule.initializeApp(firebaseConfig),  
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCjll58FtHCBljBY2x5-yXqSi6UdID1Gng'
    })
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
