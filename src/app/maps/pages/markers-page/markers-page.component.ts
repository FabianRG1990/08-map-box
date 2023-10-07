import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import {LngLat, Map, Marker} from 'mapbox-gl';


interface MarkersAndColor{
  color: string;
  marker: Marker;
}

interface PlainMarkers{
  color: string,
  lngLat: number[]
}

@Component({
  selector: 'app-markets',
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.scss']
})
export class MarkersPageComponent implements AfterViewInit {

  @ViewChild('map') divMap?: ElementRef;


  public markers: MarkersAndColor[] = [];

  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-84.0479816056772, 9.949072006419897)


  ngAfterViewInit(): void {

    if ( !this.divMap ) throw 'El elemento HTML no fue encontrado';

   this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat,
      zoom: 13 // starting zoom
      });

      this.readFromLocalStorage();

      // const markerHtml = document.createElement('div');
      // markerHtml.innerHTML= '<h7>Casa de Guadalupe</h7>';

      // const marker = new Marker({
      //   element: markerHtml
      // })
      // .setLngLat(this.lngLat)
      // .addTo(this.map);

    }

    createMarker(){

      if (!this.map) return;

      const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
      const lngLat = this.map.getCenter();

      this.addMarker(lngLat, color);
    }

    addMarker(lngLat: LngLat, color: string) {
      if (!this.map) return;

      const marker = new Marker({
        color: color,
        draggable: true,//esta propiedad es la que permite que el marcador se mueva
      })



      .setLngLat(lngLat)
      .addTo(this.map);

      this.markers.push({
        color: color,
        marker: marker,
      })//"push" se refiere a la acción de agregar un nuevo elemento a una lista o arreglo existente

      this.saveToLocalStorage();

      marker.on('dragend',() => this.saveToLocalStorage())
    }

    deleteMarker(index: number){
      this.markers[index].marker.remove();
      this.markers.splice(index, 1)//"splice" es una función que se utiliza para modificar un arreglo al agregar, eliminar o reemplazar elementos en posiciones específicas
    }

    flyTo( marker: Marker ) {

      this.map?.flyTo({
        zoom: 14,
        center: marker.getLngLat()
      });
    }

    saveToLocalStorage(){
      const plainMarkers: PlainMarkers[] = this.markers.map//map es una forma de transformar cada elemento de una lista (o arreglo) en algo diferente, creando así una nueva lista con los resultados de esa transformación
      ( ({color, marker}) => {
        return {
          color,
          lngLat: marker.getLngLat().toArray()
        }
      });

      localStorage.setItem('plainMarkers', JSON.stringify(plainMarkers));

    }

    readFromLocalStorage(){
      const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]';
      const plainMarkers: PlainMarkers[] = JSON.parse( plainMarkersString );

      plainMarkers.forEach( ({color, lngLat}) => {
        const [lng, lat] = lngLat;
        const coords = new LngLat( lng, lat );

        this.addMarker(coords, color);
      })
    }
}
