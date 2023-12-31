import {AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import {Map} from 'mapbox-gl';

@Component({
  templateUrl: './full-screen-pege.component.html',
  styleUrls: ['./full-screen-pege.component.scss']
})
export class FullScreenPegeComponent implements AfterViewInit {

  @ViewChild('map') divMap?: ElementRef;

  ngAfterViewInit(): void {

    if ( !this.divMap ) throw 'El elemento HTML no fue encontrado';

    const map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
      });  }

}
