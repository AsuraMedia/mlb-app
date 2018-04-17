import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { PicksMockService } from '../services/picks.mock.service';

const formatDate = () => {
  const today: any = new Date();
  let dd: any = today.getDate();
  let mm: any = today.getMonth() + 1;

  const yyyy = today.getFullYear();
  if ( dd < 10 ) {
    dd = '0' + dd;
  }
  if ( mm < 10 ) {
    mm = '0' + mm;
  }
  return dd + '/' + mm + '/' + yyyy;
};


@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
} )
export class AppComponent {
  title = `Mlb Daily Picks - ${ formatDate() }`;
  dailyPicks: any[];
  constructor ( private http: Http, private picksMock: PicksMockService ) {
    this.getDailyPicks();
  }

  getDailyPicks () {
    const url = 'https://topk.ngrok.io/kscore';
    this.picksMock.getPicks()
      .map( ( response ) => {
        this.dailyPicks = response;
        this.dailyPicks.forEach( ( pick ) => {
          pick.batter.imgUrl = `https://securea.mlb.com/mlb/images/fantasy/wsfb/82x100/${ pick.batter.id }@2x.jpg`;
          pick.pitcher.imgUrl = `https://securea.mlb.com/mlb/images/fantasy/wsfb/82x100/${ pick.pitcher.id }@2x.jpg`;
        } );
        return this.dailyPicks;
      } )
      .map( picks => {
        return picks.map(pick => {
          pick.batter.pitchKeys = this.picksMock.formatPitches( pick.batter );
          pick.pitcher.pitchKeys = this.picksMock.formatPitches( pick.pitcher );
          return pick;
        });
      })
      .subscribe(result => this.dailyPicks = result);
  }
}
