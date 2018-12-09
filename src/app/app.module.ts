import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  MzButtonModule,
  MzNavbarModule,
  MzDropdownModule,
  MzInputModule,
  MzCardModule,
  MzToastModule,
  MzCollectionModule ,
  MzSelectModule ,
} from 'ngx-materialize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RankingComponent } from './main/ranking/ranking.component';
import { PlayerComponent } from './main/player/player.component';
import { HttpService } from './service/http.service';
import { IoService } from './service/io.service';
import { GameComponent } from './main/game/game.component';
import { PlayerComponentComponent } from './main/game/player-component/player-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RankingComponent,
    PlayerComponent,
    GameComponent,
    PlayerComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    MzButtonModule,
    MzNavbarModule,
    MzDropdownModule, 
    MzInputModule,
    MzCardModule,
    MzToastModule,
    MzCollectionModule,
    MzSelectModule,
  ],
  providers: [
    HttpService,
    IoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
