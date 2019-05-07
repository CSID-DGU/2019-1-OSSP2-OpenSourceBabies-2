import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform,AlertController } from 'ionic-angular';
import { AnonymousSubject } from 'rxjs';

import {HTTP} from '@ionic-native/http';
//import {first} from '../next/next';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {
  
  
  constructor(public navCtrl: NavController) {
  }
 
 

}
