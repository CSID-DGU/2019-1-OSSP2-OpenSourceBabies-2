import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeatPage } from './seat';

@NgModule({
  declarations: [
    SeatPage,
  ],
  imports: [
    IonicPageModule.forChild(SeatPage),
  ],
})
export class SeatPageModule {}
