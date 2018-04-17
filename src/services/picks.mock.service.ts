import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/';
import { pick } from 'lodash';

@Injectable()
export class PicksMockService {
    constructor() { }

    getPicks () {
        return Rx.Observable.of(null)
            .delay(3000)
            .map(x => JSON.parse(`[{
                "batter": {
                   "id": 458731,
                   "name": "Joe Random",
                   "move_in_pitches": 0.014684513,
                   "move_out_pitches": 0.0053503495,
                   "move_down_pitches": 0.006679574,
                   "offspeed_pitches": 0.0023764998,
                   "fast_pitches": 0.027168412
                },
                "pitcher": {
                   "id": 519144,
                   "name": "Joe Random",
                   "move_in_pitches": 0.004413294,
                   "move_out_pitches": 0.0050146403,
                   "move_down_pitches": 0,
                   "offspeed_pitches": 0.0023045882,
                   "fast_pitches": 0.026578419
                }
             },{
                "batter": {
                   "id": 458731,
                   "name": "Joe Random",
                   "move_in_pitches": 0.014684513,
                   "move_out_pitches": 0.0053503495,
                   "move_down_pitches": 0.006679574,
                   "offspeed_pitches": 0.0023764998,
                   "fast_pitches": 0.027168412
                },
                "pitcher": {
                   "id": 519144,
                   "name": "Joe Random",
                   "move_in_pitches": 0.004413294,
                   "move_out_pitches": 0.0050146403,
                   "move_down_pitches": 0,
                   "offspeed_pitches": 0.0023045882,
                   "fast_pitches": 0.026578419
                }
             }]`));
    }

    formatPitches ( player ) {
        const pitchKeys = pick( player, [
          'fast_pitches',
          'move_in_pitches',
          'move_out_pitches',
          'move_down_pitches',
          'offspeed_pitches'
        ] );
        return Object.keys( pitchKeys )
          .map(( key ) => {
            const normalizedValue = pitchKeys[key] * 1000;
            const format = ( value ) => parseFloat( value ).toFixed( 2 );
            return { value: format( normalizedValue ) };
          });
      }
}
