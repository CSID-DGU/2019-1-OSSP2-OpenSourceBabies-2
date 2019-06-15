import { NgModule, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IonicPageModule, ModalController } from 'ionic-angular';
import { CameraPage } from './camera';

@Component({
  selector: 'app-ar-camera',
  templateUrl: './camera.html',
})
@NgModule({
  declarations: [
  ],
  imports: [
    IonicPageModule.forChild(CameraPage),
  ],
})

export class CameraPageModule {

}

