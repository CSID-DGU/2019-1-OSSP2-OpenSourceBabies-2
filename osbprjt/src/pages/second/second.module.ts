import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecondPage } from './second';
import { FirstPage } from '../first/first';
@NgModule({
  declarations: [
    SecondPage,
    FirstPage
  ],
  imports: [
    IonicPageModule.forChild(SecondPage),
  ],
})
export class SecondPageModule {}
