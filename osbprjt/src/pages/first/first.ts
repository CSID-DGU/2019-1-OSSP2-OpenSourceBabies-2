import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CameraPage } from '../camera/camera';
import {Http, Headers,RequestOptions} from '@angular/http';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {}

  ionViewDidLoad() {
    console.log(this.navParams.get('msg'));
  
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


}


