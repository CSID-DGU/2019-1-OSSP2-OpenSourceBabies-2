import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform,AlertController } from 'ionic-angular';
import { AnonymousSubject } from 'rxjs';
import { FirstPage } from '../first/first';
import {Http, Headers,RequestOptions} from '@angular/http';
import { fromPromise } from 'rxjs/observable/fromPromise';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {
  

  newItem:string; //입력값을 저장할 변수

  constructor(public navCtrl: NavController, public http: Http) {
  }
 
  addItem():void{
    let headers=new Headers();
    headers.append("Content-Type",'application/json');

    let body={
      message:this.newItem
    };

    this.http.post('http://localhost:9876/test',JSON.stringify(body),{headers:headers})
    .subscribe((data)=>{
      console.log(data);
    })
 
 //   this.navCtrl.push(FirstPage,{msg:this.newItem});
  }

}
