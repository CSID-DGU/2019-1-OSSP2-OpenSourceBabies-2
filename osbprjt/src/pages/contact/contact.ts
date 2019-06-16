import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  items:string []=[];
  newItem:string;
  constructor(private iab: InAppBrowser, public navCtrl: NavController) {
  }
  openUrl()
  {
    
   this.iab.create(' http://lib.dongguk.edu/local/html/7240','_blank','locatiton=yes');
  }   
  addItem2():void
  {
    this.items.push(this.newItem);
    this.newItem='';
  } 
}
