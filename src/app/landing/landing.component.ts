import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
    texto : string = 'Wenceslau Braz - Cuidado com as cargas';
  lat: number = -23.8779431;
  lng: number = -49.8046873;
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
          "color": "#575757"
        }
      ]
    },
    {
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#575757"
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

icon1 = { url: '../../assets/img/icon/marker1.png', scaledSize: {height: 40, width: 40}};
icon2 = { url: '../../assets/img/icon/marker1.png', scaledSize: {height: 40, width: 40}};
  constructor() { }

  ngOnInit() {}

}
