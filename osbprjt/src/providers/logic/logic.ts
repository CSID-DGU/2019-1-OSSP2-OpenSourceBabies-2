import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IData } from '../../interfaces/data.interface';
import { Observable } from 'rxjs';
/*
  Generated class for the LogicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LogicProvider {

  private dataUrl: string = "assets/books.json"

  constructor(public http: HttpClient) {
    console.log('Hello LogicProvider Provider');
    //alert('Hello LogicProvider Provider');
  }

  getData(): Observable<IData[]> {
    return this.http.get<IData[]>(this.dataUrl)
 }

}
