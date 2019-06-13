import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
//import { InAppBrowser } from '@ionic-native/in-app-browser';
//import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
//import { HttpModule } from '@angular/http';
import { SeatPage } from '../pages/seat/seat';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }
  openUrl1()
  {
    window.open('http://www.dongguk.edu/mbs/kr/index.jsp');
  }
  openUrl2()
  {
    window.open('https://eclass.dongguk.edu/index.jsp');
  }
  openUrl3()
  {
    window.open('https://engineer.dongguk.edu/');
  }

}

