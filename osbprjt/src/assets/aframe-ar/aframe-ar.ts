import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the AframeArPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aframe-ar',
  templateUrl: 'aframe-ar.html',
  
})
export class AframeArPage {

  constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
    storage.get('floor').then((val)=>{
      console.log('Your floor is', val);
    });
    storage.remove('floor');
  }
  clickFloor(){
    var entity = document.querySelector('a-text');
    entity.parentNode.removeChild(entity);

  }
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad AframeArPage');
  }

}
