import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Data } from '@angular/router';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {


  displayURL;

  selectedEvent: any;
  carousels = [];
  constructor(private sanitizer: DomSanitizer, private Router: ActivatedRoute) {
    this.displayURL = sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/tgbNymZ7vqY');
  }
  ngOnInit() {
    const self = this;
    this.selectedEvent = JSON.parse(localStorage.getItem('dataSource'));
    console.log('se', this.selectedEvent.linkvideo);
    console.log(' this.selectedEvent.imgs', this.selectedEvent.imgs);
    var imgs = new Object();
    imgs = this.selectedEvent.imgs;
 
  
    Object.keys(imgs).forEach(function (rkey, row) {
      console.log(imgs[rkey].img);
      self.carousels.push(imgs[rkey].img);
      
    })
    console.log(self.carousels);

  }

}
