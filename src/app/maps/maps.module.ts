import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { SideMenuComponent } from '../alone/components/side-menu/side-menu.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPegeComponent } from './pages/full-screen-pege/full-screen-pege.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-renge-page.component';

import *as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { ConterAloneComponent } from '../alone/components/conter-alone/conter-alone.component';
(mapboxgl as any).accessToken = 'pk.eyJ1IjoibWV0YWwxOTkwIiwiYSI6ImNsbGczdjVmNzBxY2EzZXFhbDFtamRuazMifQ.UVGCqlR5xXEuQGmamcet3w';


@NgModule({
  declarations: [
    MiniMapComponent,
    MapsLayoutComponent,
    FullScreenPegeComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    ConterAloneComponent,
    SideMenuComponent

  ]
})
export class MapsModule { }
