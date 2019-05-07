import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
<<<<<<< HEAD
import { Platform,AlertController } from 'ionic-angular';
import { AnonymousSubject } from 'rxjs';

import {HTTP} from '@ionic-native/http';
//import {first} from '../next/next';


=======
import { CameraPage } from '../camera/camera';
>>>>>>> upstream/master
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {
  
  
  constructor(public navCtrl: NavController) {
  }
<<<<<<< HEAD
 
 

=======
  openCamera(): void{
    this.navCtrl.push(CameraPage);
  }
>>>>>>> upstream/master
}
