import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  floor:string;//층
  constructor(private storage:Storage,public navCtrl: NavController, public navParams: NavParams) {
    storage.set('floor', '2nd floor!');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }
 
}
