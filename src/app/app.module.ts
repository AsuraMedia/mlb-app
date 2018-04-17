import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { PlayerCardComponent } from '../components/player-card/playerCard.component';

import { PicksMockService } from '../services/picks.mock.service';


@NgModule({
  declarations: [
    AppComponent,
    PlayerCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    PicksMockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
