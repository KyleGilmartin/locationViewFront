import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

// import firebase module
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ListLocationsComponent} from './list-locations/list-locations.component'
import { TodayComponent } from './today/today.component';
import { AgmCoreModule} from '@agm/core';

import { AngularFireAuthModule } from "@angular/fire/auth";


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';


import { NgAuthService } from "./ng-auth.service";
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GetlocationsComponent } from './getlocations/getlocations.component';



@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    ListLocationsComponent,
     DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    HomeComponent,
    ProfileComponent,
    GetlocationsComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCQ3PpfJyrmHs6gpcKA3stlAcPoy-_y8Y0'
    })

  ],
  providers: [
    NgAuthService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
