import { NgModule, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IonicPageModule, ModalController } from 'ionic-angular';
import { CameraPage } from './camera';
import { componentFactoryName } from '@angular/compiler';

@Component({
  selector: 'app-ar-camera',
  templateUrl: './camera.html',
  styleUrls: ['./CameraPage.scss'],
  encapsulation: ViewEncapsulation.None
})
@NgModule({
  declarations: [
    CameraPage,
  ],
  imports: [
    IonicPageModule.forChild(CameraPage),
  ],
})
export class ArCameraPage implements OnInit{
  constructor(private modalCtrl: ModalController){}

  ngOnInit(){

  }


}
