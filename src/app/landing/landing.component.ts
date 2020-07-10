import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

/** 扱うデータの型 */
interface Item {
  id: string;
  name: string;
  age: number;
}
export interface location {
  lat: number, lng: number, url: string
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  zoom: number = 2;
  public darkstyle = [
    {
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#616161"
        },
        {
          "visibility": "on"
        }
      ]
    },

    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#444343"
        }
      ]
    },


  ]
  black_points_string = ['london', 'berlin', 'nyc', 'tokyi', 'boston and chicago'];

  Ads_points = [];
  Black_points = [];
  ads$: any;

  items: Observable<Item[]>;
  constructor(private CrudService: CrudService, private Router: Router) {
    this.black_points_string.forEach(black_point => {
      this.CrudService.getLocation(black_point, '').subscribe(res => {
        const markerObject = { lat: res.data[0].result_object.latitude, lng: res.data[0].result_object.longitude, marker: { url: '../../assets/img/icon/marker_2.gif', scaledSize: { height: 40, width: 40 } } };
        this.Black_points.push(markerObject);
      });
    });
  }

  filter_data = {
    location: '',
    date: '',
    event_type: 1
  };
  event_type = '';
  types = ['Majors', 'Marathons', 'Half Marathons', 'Triathlons', 'Events near your', 'Trails/Ultra', 'Runtrip Expiriences', 'Otras categorías'];
  ngOnInit() {
    this.CrudService.getProducts().subscribe(res => {
      this.ads$ = res;
      this.ads$.forEach(ad => {
        this.CrudService.getLocation(ad.ciudad, ad.desc).subscribe(res => {
          const markerObject = { lat: res.data[0].result_object.latitude, lng: res.data[0].result_object.longitude, marker: { url: '../../assets/img/icon/marker_0.gif', scaledSize: { height: 40, width: 40 } } };
          this.Ads_points.push(markerObject);
        });
      });
    });

  }
  filter(event_type) {
    this.filter_data.event_type = this.types.indexOf(event_type) + 1;
    let str = this.filter_data.date.split('-');
    this.filter_data.date = str[1] + '/' + str[2] + '/' + str[0];
    this.Router.navigate(['/filter', { 'location': this.filter_data.location, 'event_type': this.filter_data.event_type, 'date': this.filter_data.date }]);

    console.log('location', this.filter_data);
  }


}