import { Component, OnInit } from '@angular/core';
import {CrudService} from '../services/crud.service'
@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
    texto : string = 'Wenceslau Braz - Cuidado com as cargas';
    lat: number = 30.8779431;
    lng: number = 30.8046873;
    zoom: number = 2;
  public darkstyle =[
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

icon1 = { url: '../../assets/img/icon/marker1.gif', scaledSize: {height: 40, width: 40}};
icon2 = { url: '../../assets/img/icon/marker1.gif', scaledSize: {height: 40, width: 40}};
ads : any;
  constructor( private CrudService: CrudService) { }

  ngOnInit() {
    this.CrudService.getProducts().subscribe(res=> {

      this.ads = res;
      console.log(JSON.stringify(this.ads.payload) )
    }); 
  }
}