import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform,AlertController } from 'ionic-angular';
import { AnonymousSubject } from 'rxjs';
import { FirstPage } from '../first/first';
import {HTTP} from '@ionic-native/http';
import { fromPromise } from 'rxjs/observable/fromPromise';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {
  

  newItem:string; //입력값을 저장할 변수

  constructor(public navCtrl: NavController) {
  }
 
  addItem():void{
    this.navCtrl.push(FirstPage,{msg:this.newItem});

  }

}
