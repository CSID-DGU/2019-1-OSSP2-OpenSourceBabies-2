import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { Platform,AlertController } from 'ionic-angular';
//import { AnonymousSubject } from 'rxjs';
import { FirstPage } from '../first/first';
import {Http, Headers,RequestOptions} from '@angular/http';
//import { fromPromise } from 'rxjs/observable/fromPromise';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
//import { BrowserDomAdapter } from '@angular/platform-browser/src/browser/browser_adapter';
import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {
  

 

  constructor(private iab: InAppBrowser, public navCtrl: NavController,public http: Http
    ) {
  }
 
  newItem:string; //입력값을 저장할 변수
  
  addItem():void{
    let headers=new Headers();
    headers.append("Content-Type",'application/json');

    let body={
      message:this.newItem,
      page:'1'
    };

    this.http.post('http://15.164.97.30:3000/api/scraping',JSON.stringify(body),{headers:headers})
    .toPromise().then(res=>{
      console.log("아이오닉 검색 시"+res.json());
    })
    this.http.post('http://15.164.97.30:3002/api/scraping',JSON.stringify(body),{headers:headers})
    .subscribe((data)=>{
      console.log("server2:"+data.json());
    })

    this.navCtrl.push(FirstPage,{msg:this.newItem});
  }

  

}
