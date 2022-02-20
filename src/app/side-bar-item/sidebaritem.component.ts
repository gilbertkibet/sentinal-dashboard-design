import { Component, Input } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'side-bar-item',
  templateUrl: './sidebaritem.component.html',
})
export class SideBarItem {
  @Input() name: string = '';
  @Input() icon: string = '';

  ngAfterViewInit() {
    feather.replace();
  }
}
