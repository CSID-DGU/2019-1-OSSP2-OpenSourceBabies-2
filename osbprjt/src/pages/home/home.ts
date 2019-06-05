import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform,AlertController } from 'ionic-angular';
import { AnonymousSubject } from 'rxjs';
import { FirstPage } from '../first/first';
import {HTTP} from '@ionic-native/http';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { BrowserDomAdapter } from '@angular/platform-browser/src/browser/browser_adapter';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {
  

  newItem:string; //입력값을 저장할 변수

  constructor(private iab: InAppBrowser, public navCtrl: NavController) {
  }
 
  openUrl1()
  {
    
   this.iab.create('http://www.dongguk.edu/mbs/kr/index.jsp','_blank','locatiton=yes');
  }    
  openUrl2()
  {
    this.iab.create(' https://eclass.dongguk.edu/index.jsp','_blank','locatiton=yes');
   
  }
  openUrl3()
  {
    this.iab.create('https://engineer.dongguk.edu/','_blank','locatiton=yes');
  }

  addItem():void{
    this.navCtrl.push(FirstPage,{msg:this.newItem});

  }

  

}
