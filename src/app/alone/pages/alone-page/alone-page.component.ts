import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConterAloneComponent } from '../../components/conter-alone/conter-alone.component';

@Component({
  standalone: true,
  imports: [CommonModule, ConterAloneComponent],
  templateUrl: './alone-page.component.html',
  styleUrls: ['./alone-page.component.scss']
})
export class AlonePageComponent {

  constructor(){}

}
