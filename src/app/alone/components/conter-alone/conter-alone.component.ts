import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
  selector: 'conter-alone',
  standalone: true,
  imports: [CommonModule, SideMenuComponent],
  templateUrl: './conter-alone.component.html',
  styleUrls: ['./conter-alone.component.scss']
})
export class ConterAloneComponent {

  @Input()
  public counter: number = 10;

}
