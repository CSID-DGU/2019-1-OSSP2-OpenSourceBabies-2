import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';
import { CameraPage } from '../camera/camera';
import { Http, Headers,RequestOptions } from '@angular/http';
import {  ViewChild } from '@angular/core';
import { LogicProvider } from '../../providers/logic/logic';
import { Observable } from "rxjs";
import { IData } from '../../interfaces/data.interface';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

  /*
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }
*/
@ViewChild(Slides) slides: Slides;

  eachBook$: Observable<IData[]>;
  totalBookNo: number;
  
  constructor(public navCtrl: NavController,public http: Http
    ,public navParams: NavParams,public _logic: LogicProvider) {
  }
  

ionViewWillEnter() {
  this.eachBook$ = this._logic.getData()
  this.eachBook$.subscribe((res) => {
    this.totalBookNo = res.length
  })
}


  //constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {}

  ionViewDidLoad() {
    console.log(this.navParams.get('msg'));
  
  }
  openCamera(): void{
    let headers=new Headers();
    headers.append("Content-Type",'application/json');

    let body={
      number:'001', //청구번호
      floor:'3'
    };

    this.http.post('http://15.164.97.30:3001/api/osbprjt',JSON.stringify(body),{headers:headers})
    .subscribe((data)=>{
      console.log(data);
    })
    this.navCtrl.push(CameraPage);
  }

  
}
