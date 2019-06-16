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

  link:string;
  mysymbol:string;
  constructor(public navCtrl: NavController,public http: Http
    ,public navParams: NavParams,public _logic: LogicProvider) {

  }


  //constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {}

  ionViewDidLoad() {
    this.link= this.navParams.get('msg');
    this.mysymbol=this.navParams.get('symbol');
    //console.log("symbol"+this.mysymbol);
    document.querySelector("#linkframe").setAttribute("src",this.link);
  }
  openCamera(): void{
    
    let headers=new Headers();
    headers.append("Content-Type",'application/json');

    let body={
      symbol:this.mysymbol, //�?��번호
      floor:'3'
    };

    this.http.post('http://15.164.97.30:3001/api/osbprjt',JSON.stringify(body),{headers:headers})
    .toPromise().then(res=>{      console.log("second page res.json()"+res.json());
      this._logic.bookwhere=res.json();
      console.log("this._logic.bookwhere"+ this._logic.bookwhere);
      console.log("['n_fbb_idx']"+this._logic.bookwhere['n_fbb_idx']);
        this.navCtrl.push(CameraPage);
    })
    
  }

  
}
