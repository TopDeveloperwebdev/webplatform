import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  public books= [];
  public users: any;
  constructor(private db: AngularFireDatabase, private httpClient: HttpClient) { }

  postProduct(formValue) {
   
    this.db.list('/Publicidad/Eventos', ref => ref.orderByChild('key').equalTo('-LF2eRf1lHI6X3U6C7Yh'))
  }
  getEvents() {
    return this.db.list('/Eventos').valueChanges();  
  
  }
   
 
 getProducts() {
    return this.db.list('/Publicidad/Eventos').valueChanges();

  }

  getLocation(city: string, desc: string): Observable<any> {

    const headers = new HttpHeaders()
      .set('x-rapidapi-host', 'tripadvisor1.p.rapidapi.com')
      .set('x-rapidapi-key', '2b6b3c87bemshb947ceeb3e12065p122c54jsna08aa76c11f8')
      .set('useQueryString', 'true');
    return this.httpClient.get(`${environment.AUTH_SERVER_ADDRESS}/locations/search?location_id=1&limit=1&sort=relevance&offset=0&lang=spa&currency=USD&units=km&query=${city} + ${desc}`, { headers: headers, });
  }

}