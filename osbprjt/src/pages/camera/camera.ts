import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild, AfterViewInit } from '@angular/core';
import { LogicProvider } from '../../providers/logic/logic';

//import { Platform } from '@ionic/angular';
//import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
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
export class CameraPage implements AfterViewInit{
  floor:string;//층
  Book:object;
  constructor(public navCtrl: NavController, public navParams: NavParams,public _logic: LogicProvider){
    /*private platform: Platform,private androidPermissions: AndroidPermissions*/
  /*
    if (this.platform.is('cordova')) {
      this.platform.ready().then(() => {
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
          result => console.log('Has permission?', result.hasPermission),
          err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
        );

        this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA]);
      });
    }
     */
  }
  ngAfterViewInit() {
    
    this.Book = this._logic.getBWhereData();
    //console.log(this.Book);
    var link=`https://maps.mapwize.io/#/f/p/dgu_lib/stairs/t/p/dgu_lib/line1_bk${this.Book['n_fbb_idx']}?embed=true&&z=0.5?apiKey=cd75d824790783e5ba22e75646bff79f`;
    console.log(link);
    document.querySelector("#iframe").setAttribute("src",link);
    //this.videoContainer.nativeElement.appendChild(this.video);
    // this.initWebRTC();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }
 
}
