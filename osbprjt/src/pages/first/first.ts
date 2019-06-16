import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Slides } from 'ionic-angular';
import { CameraPage } from '../camera/camera';
import { Http, Headers,RequestOptions } from '@angular/http';
import {  ViewChild } from '@angular/core';
import { LogicProvider } from '../../providers/logic/logic';
import { Observable } from "rxjs";
import { IData } from '../../interfaces/data.interface';
import { ItData } from '../../interfaces/data.interface';
import { SecondPage } from '../second/second';
import * as $ from 'jquery';

/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

 
  transferItem:string;

  @ViewChild(Slides) slides: Slides;

  eachBook$: Object;
  totalBookNo: number;
  eachBook_interpark$: Observable<ItData[]>;
  query: string;
  url:string;
  apiKey:string;
  type:string;
  dataAPI:Observable<any>;
  mylink:string;
  constructor(public navCtrl: NavController,public http: Http
    ,public navParams: NavParams,public _logic: LogicProvider) {
  //   this.query=navParams.get('msg');
      
  }
  /*
 ajax():void { 
    this.url='http://book.interpark.com/api/search.api'
    this.apiKey ='B25A5112DBB7B1A1397581B384368BFFBDD72DF40F532624B6A5CEED31CF017D';
    this.type='jsonp';
    var stringmay=`${this.url}?key=${this.apiKey}&&query=${this.query}`;
    
    var script=document.createElement("script");
    script.type="text/javascript";
    script.src=stringmay;
    $('head').append(script);
    console.log("나는야 ajax");
    
  } 
  */
/*ajax():void { 
  this.url='http://book.interpark.com/api/search.api'
  this.apiKey ='B25A5112DBB7B1A1397581B384368BFFBDD72DF40F532624B6A5CEED31CF017D';
  this.type='jsonp';
  var stringmay=`${this.url}?key=${this.apiKey}&&query=${this.query}&output=${this.type}`;
  console.log(stringmay);
  $.ajax({
  type:"GET",
  url:stringmay,
  success: function(data){
    console.log(data);
  }
  });
  }*/
ionViewWillEnter() {
  this.eachBook$ = this._logic.getBookData();
  this.totalBookNo = Object.keys(this.eachBook$).length;
  console.log("totalBookNo"+ this.totalBookNo);

}
  //constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {}

  ionViewDidLoad() {
    this.query=this.navParams.get('msg');
   // this.ajax();
  }

/*
  getDataDetail():void{
    this.url='http://book.interpark.com/api/search.api'
    this.apiKey ='B25A5112DBB7B1A1397581B384368BFFBDD72DF40F532624B6A5CEED31CF017D';
    this.type='json';
    var stringmay=`${this.url}?key=${this.apiKey}&&query=${this.query}&output=${this.type}`;
    console.log(stringmay);
    //this.eachBook_interpark$= this._logic.getItData(stringmay);

  }
  */

  nextPage(link:string):void{
    this.mylink=link;
    let headers=new Headers();
    headers.append("Content-Type",'application/json');

    let body={
      message:this.mylink
    };

      this.http.post('http://15.164.97.30:3002/api/scraping',JSON.stringify(body),{headers:headers})
      .toPromise().then((data)=>{
        var mysymbol=data.json();
        this.navCtrl.push(SecondPage,{msg:this.mylink,symbol:mysymbol});
        console.log("server2:"+data.json());
      })
     
  }

}
