import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import {Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.scss']
})
export class MiniMapComponent implements AfterViewInit{


  @Input() lngLat?: [number, number];

  @ViewChild('map') divMap?: ElementRef;




ngAfterViewInit(): void {
  if( !this.divMap?.nativeElement ) throw "map Div not found";
  if( !this.lngLat ) throw "lngLat can't be null";


    const map = new Map({
    container: this.divMap.nativeElement, // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: this.lngLat,
    zoom: 15, // starting zoom
    interactive: false
    });

    new Marker()
    .setLngLat( this.lngLat )
    .addTo(map)
}


}


