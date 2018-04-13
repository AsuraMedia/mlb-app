import { Component, Input } from '@angular/core';

@Component({
  selector: 'player-card',
  templateUrl: './playerCard.component.html',
  styleUrls: ['./playerCard.component.css']
})
export class PlayerCardComponent {
  @Input() player: any = {}

  formatFloat (decimal) {
    return parseFloat(decimal).toFixed(2);
  }
}
