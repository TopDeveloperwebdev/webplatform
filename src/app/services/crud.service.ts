import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor(private db: AngularFireDatabase, private httpClient: HttpClient) { }

  postProduct(formValue) {
    this.db.list('/Publicidad/Eventos').push(formValue);
  }

  getProducts() {
    return this.db.list('/Publicidad/Eventos').valueChanges();

  }

  getLocation(city: string, desc: string): Observable<any> {

    const headers = new HttpHeaders()
      .set('x-rapidapi-host', 'tripadvisor1.p.rapidapi.com')
      .set('x-rapidapi-key', '0ff4de13e9mshbafda0022c0c6cfp18355ajsn2554e0eb87f4')
      .set('useQueryString', 'true');
    return this.httpClient.get(`${environment.AUTH_SERVER_ADDRESS}/locations/search?location_id=1&limit=1&sort=relevance&offset=0&lang=spa&currency=USD&units=km&query=${city} + ${desc}`, { headers: headers, });
  }

}