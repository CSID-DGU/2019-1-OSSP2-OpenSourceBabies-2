import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(private iab: InAppBrowser){}
  openSystem(){
    var browser=this.iab.create('https://google.com','_system');
    browser.show()
  }
  
}
