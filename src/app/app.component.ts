import { Component } from '@angular/core';
import { Http } from '@angular/http';

const formatDate = () => {
  let today: any = new Date();
  let dd: any = today.getDate();
  let mm: any = today.getMonth()+1;

  var yyyy = today.getFullYear();
  if(dd<10){
      dd='0'+dd;
  } 
  if(mm<10){
      mm='0'+mm;
  } 
  return dd+'/'+mm+'/'+yyyy;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Mlb Daily Picks - ${formatDate()}`;
  dailyPicks: any[];
  constructor( private http: Http ) {
    this.getDailyPicks();
  }

  getDailyPicks () {
    const url = 'https://topk.ngrok.io/kscore';
    this.http.get(url)
      .subscribe((response) => {
        this.dailyPicks = response.json();
        this.dailyPicks.forEach((pick) => {
          pick.batter.imgUrl = `https://securea.mlb.com/mlb/images/fantasy/wsfb/82x100/${pick.batter.id}@2x.jpg`
          pick.pitcher.imgUrl = `https://securea.mlb.com/mlb/images/fantasy/wsfb/82x100/${pick.pitcher.id}@2x.jpg`
        })
      })
  }
}
