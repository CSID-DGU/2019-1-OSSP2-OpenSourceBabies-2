import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { NavController} from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPageModule } from '../pages/login/login.module';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CameraPage } from '../pages/camera/camera';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirstPage } from '../pages/first/first';
import { AframeArPage } from '../assets/aframe-ar/aframe-ar';
import { LogicProvider } from '../providers/logic/logic';
import { SecondPage } from '../pages/second/second';
import {SeatPage} from '../pages/seat/seat';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CameraPage,
    FirstPage,
    SecondPage,
    AframeArPage,
    SeatPage
  ],
  imports: [
    LoginPageModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),

    IonicStorageModule.forRoot(),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CameraPage,
    FirstPage,
    SecondPage,
    AframeArPage,
    SeatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
   // HeaderColor,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpModule,
    HttpClientModule,
    InAppBrowser,
    //{provide: ErrorHandler, useClass: IonicErrorHandler},
    LogicProvider
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
