import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,public http: Http) {
    this.addSeatList();
    this.addSeatStatus();
  }
  addSeatList():void{
  this.http.get('http://book.interpark.com/api/search.api?key=B25A5112DBB7B1A1397581B384368BFFBDD72DF40F532624B6A5CEED31CF017D&query=%EC%95%84%EC%9D%B4%EC%98%A4%EB%8B%89&output=json')
  .subscribe((data1)=>{
    console.log(data1);
  });
  }
  addSeatStatus():void{
    this.http.get('http://api.koreandarren.com/dongguk_library/room_status.php')
    .subscribe((data2)=>{
      console.log(data2);
    });
  }
}
