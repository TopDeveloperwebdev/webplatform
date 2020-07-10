import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';


@Injectable()
export class DataService {

  private dataSource = new BehaviorSubject({});
  currentdata = this.dataSource.asObservable();

  constructor() { }

  changeData(data : any) {
    this.dataSource.next(data)
  }

}