import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-card',
  templateUrl: './icon-card.component.html',
})
export class IconCard {
  @Input() cardTitle: string = '';
  @Input() imageUrl: string = '';
}
