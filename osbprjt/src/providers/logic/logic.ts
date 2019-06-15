import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IData } from '../../interfaces/data.interface';
import { ItData } from '../../interfaces/data.interface';

import { Observable } from 'rxjs';

/*
  Generated class for the LogicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LogicProvider {

  private dataUrl: string = "assets/books.json"
  public URL:string;
  public book:Object;
  public bookwhere:Object;
  constructor(public http: HttpClient) {
    console.log('Hello LogicProvider Provider');
    //alert('Hello LogicProvider Provider');
  }

  getData(): Observable<IData[]> {
    console.log(this.dataUrl);
    return this.http.get<IData[]>(this.dataUrl)
 }
 getBookData(): Object {
  return this.book;
}
getBWhereData(): Object {
  return this.bookwhere;
}
}
