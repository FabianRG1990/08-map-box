import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import {LngLat, Map} from 'mapbox-gl';


@Component({
  selector: 'app-zoom',
  templateUrl: './zoom-renge-page.component.html',
  styleUrls: ['./zoom-renge-page.component.scss']
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy{

  @ViewChild('map') divMap?: ElementRef;

  public zoom: number = 10;
  public map?: Map;
  public lngLat: LngLat = new LngLat(-84.07729538494618, 9.774989008307713)


  ngAfterViewInit(): void {

    if ( !this.divMap ) throw 'El elemento HTML no fue encontrado';

   this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat,
      zoom: this.zoom, // starting zoom
      });

      this.mapListeners();
    }

    ngOnDestroy(): void {
      this.map?.remove();/* con remove remuevo todo el mapa incluyendo los listeners */
    }


      //!Utilice listeners para comprobar el tráfico entrante en la dirección IP del equilibrador de carga.
      //* en otras palabras es alguien que esta escuchando que algo sucede
      mapListeners() {
        if ( !this.map ) throw 'Mapa no inicializado';

        this.map.on('zoom', (ev) => {
          this.zoom = this.map!.getZoom();
        })

        this.map.on('zoomend', (ev) => {
          if (this.map!.getZoom() < 18) return;
          this.map!.zoomTo(18);
        })

        this.map.on('move', () => {
          this.lngLat = this.map!.getCenter();
          const {lng, lat} = this.lngLat;
        })


      }

      zoomIn(){
        this.map?.zoomIn()
      };

      zoomOut(){
        this.map?.zoomOut()
      };

      zoomChanged(value: string){
        this.zoom = Number(value);
        this.map?.zoomTo(this.zoom);
      }
}
