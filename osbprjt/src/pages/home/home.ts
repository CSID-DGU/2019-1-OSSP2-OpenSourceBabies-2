import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform,AlertController } from 'ionic-angular';
import { AnonymousSubject } from 'rxjs';
import { FirstPage } from '../first/first';
import {Http, Headers,RequestOptions} from '@angular/http';
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

  constructor(private iab: InAppBrowser, public navCtrl: NavController,public http: Http) {
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
    let headers=new Headers();
    headers.append("Content-Type",'application/json');

    let body={
      message:this.newItem
    };

    this.http.post('http://localhost:8080/test',JSON.stringify(body),{headers:headers})
    .subscribe((data)=>{
      console.log(data);
    })
 
 //   this.navCtrl.push(FirstPage,{msg:this.newItem});
  }

  

}
