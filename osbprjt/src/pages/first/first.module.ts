import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirstPage } from './first';
import { SecondPage } from '../second/second';
@NgModule({
  declarations: [
  ],
  imports: [
    IonicPageModule.forChild(FirstPage),
  ],
})
export class FirstPageModule {

}
