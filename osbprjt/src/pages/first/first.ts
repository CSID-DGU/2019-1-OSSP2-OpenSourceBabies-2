import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Slides } from 'ionic-angular';
import { CameraPage } from '../camera/camera';
import { Http, Headers,RequestOptions } from '@angular/http';
import {  ViewChild } from '@angular/core';
import { LogicProvider } from '../../providers/logic/logic';
import { Observable } from "rxjs";
import { IData } from '../../interfaces/data.interface';
import { SecondPage } from '../second/second';

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

  eachBook$: Observable<IData[]>;
  totalBookNo: number;
  query: string;
  url:string;
  apiKey:string;
  type:string;
  dataAPI:Observable<any>;
  constructor(public navCtrl: NavController,public http: Http
    ,public navParams: NavParams,public _logic: LogicProvider) {
     this.query=navParams.get('msg');
      this.dataAPI=this.getDataDetail();
      
      this.dataAPI.subscribe(res => console.log(res));
      
  }
  

ionViewWillEnter() {
  this.eachBook$ = this._logic.getData()
  this.eachBook$.subscribe((res) => {
    this.totalBookNo = res.length
  })
}


  //constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {}

  ionViewDidLoad() {
    this.query=this.navParams.get('msg');
  
  }
  openCamera(): void{
    let headers=new Headers();
    headers.append("Content-Type",'application/json');

    let body={
      message:'001' //청구번호
    };

    this.http.post('http://15.164.97.30:3001/api/osbprjt',JSON.stringify(body),{headers:headers})
    .subscribe((data)=>{
      console.log(data);
    })

    this.navCtrl.push(CameraPage);
  }
  getDataDetail():Observable<any>{
    this.url='http://book.interpark.com/api/search.api'
    this.apiKey ='B25A5112DBB7B1A1397581B384368BFFBDD72DF40F532624B6A5CEED31CF017D';
    this.type='json';
    var stringmay=`${this.url}?key=${this.apiKey}&&query=${this.query}&output=${this.type}`;
    console.log(stringmay);
    return this.http.get(`${this.url}?key=${this.apiKey}&&query=${this.query}&output=${this.type}`);
    }

  nextPage():void{
      this.navCtrl.push(SecondPage);
  }

}


