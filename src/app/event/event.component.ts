import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  focus: any;
  focus1: any;
  texto: string = 'Wenceslau Braz - Cuidado com as cargas';
  lat: number = 23.8779431;
  lng: number = 49.8046873;
  zoom: number = 2.5;
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

  icon1 = { url: '../../assets/img/icon/marker1.gif', scaledSize: { height: 40, width: 40 } };
  icon2 = { url: '../../assets/img/icon/marker1.gif', scaledSize: { height: 40, width: 40 } };
  constructor() { }

  ngOnInit() { }

}