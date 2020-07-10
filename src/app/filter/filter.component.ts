import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../services/crud.service';
import {LandingComponent} from '../landing/landing.component'
@Component({
  selector: 'app-ads',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  focus: any;
  focus1: any;
  zoom: number = 2;
  filter_data = {
    location: '',
    date: '',
    event_type: ''
  };
  search_logo = '';
  eventDatas = [];
  Black_points = [];
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

  events: any;
  constructor(private route: ActivatedRoute, private CrudService: CrudService , private LandingComponent : LandingComponent) {
    this.filter_data.location = this.route.snapshot.params['location'];
    this.filter_data.event_type = this.route.snapshot.params['event_type'];
    this.filter_data.date = this.route.snapshot.params['date'];
    this.getEvents(this.filter_data);
    this.search_logo ='./assets/img/icon/event_type_' + this.filter_data.event_type + '.png';
  }

  ngOnInit() {
    this.Black_points = this.LandingComponent.Black_points;
    console.log('this.black' , this.Black_points);
  }
  getEvents(filter_data) {
    this.CrudService.getEvents(filter_data).subscribe((snapshot: any) => {
      this.events = snapshot;
      this.events.forEach(res => {
        let eventData = res;
        eventData.marker = { url: '../../assets/img/icon/marker_' + res.t_pos + '.gif', scaledSize: { height: 40, width: 40 } };
        this.eventDatas.push(eventData);
      });
      console.log('evebnts', this.eventDatas);
    });;

  }

}


