import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConterAloneComponent } from '../../components/conter-alone/conter-alone.component';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  standalone: true,
  imports: [CommonModule, ConterAloneComponent, SideMenuComponent],
  templateUrl: './alone-page.component.html',
  styleUrls: ['./alone-page.component.scss']
})
export class AlonePageComponent {

  constructor(){}

}
