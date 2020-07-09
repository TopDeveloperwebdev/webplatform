import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor(private db: AngularFireDatabase,) { }

  postProduct(formValue) {
    this.db.list('/Publicidad/Eventos').push(formValue);
  }
  
  getProducts(){
    return  this.db.list('/Publicidad/Eventos').snapshotChanges(); 
  }
}