import { Component, Input } from '@angular/core';

@Component( {
  selector: 'app-player-card',
  templateUrl: './playerCard.component.html',
  styleUrls: [ './playerCard.component.css' ]
} )
export class PlayerCardComponent {
  @Input() player: any;
  private pitchKeys: Array<any>;

  constructor () {
  }
}
