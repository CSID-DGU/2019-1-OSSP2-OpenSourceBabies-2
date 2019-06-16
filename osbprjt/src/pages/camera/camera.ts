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
  floor:string;//�?
  rowNo:number;
  row1:boolean=false;
  row2:boolean=false;;
  row3:boolean=false;
  row4:boolean=false;
  row5:boolean=false;
  row6:boolean=false;

  
  //constructor(public navCtrl: NavController, public navParams: NavParams,/*private platform: Platform,private androidPermissions: AndroidPermissions*/) {
  
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
    this.rowNo=this.Book['n_fbbb_idx'];
    //console.log(this.Book);
    var link=`https://maps.mapwize.io/#/f/p/dgu_lib/stairs/t/p/dgu_lib/line1_bk${this.Book['n_fbb_idx']}?embed=true&&z=0.5?apiKey=cd75d824790783e5ba22e75646bff79f`;
    console.log(link);
    document.querySelector("#iframe").setAttribute("src",link);
    //this.videoContainer.nativeElement.appendChild(this.video);
    // this.initWebRTC();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
    console.log("rowNo"+this.rowNo);
   

    if(this.rowNo==1)
    {
      this.row1=true;
      //id가 23456??image�?hidden
    }
    else if(this.rowNo==2)
    {
      //id가 23456??image�?hidden
      this.row2=true;
    }
    else if(this.rowNo==3)
    {
      //id가 23456??image�?hidden
      this.row3=true;
    }
    else if(this.rowNo==4)
    {
      this.row4=true;
    }
    else if(this.rowNo==5)
    {
      this.row5=true;
    }
    else if(this.rowNo==6)
    {
      this.row6=true;
    }

    console.log("row1"+this.row1);
    console.log("row2"+this.row2);
    console.log("row3"+this.row3);
    console.log("row4"+this.row4);
    console.log("row5"+this.row5);
    console.log("row6"+this.row6);
  }
 
}
