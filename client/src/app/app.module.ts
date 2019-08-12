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
  MzCollectionModule,
  MzSelectModule,
  MzCheckboxModule,
} from 'ngx-materialize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainQwirkleComponent } from './qwirkle/main/main-qwirkle.component';
import { RankingComponent } from './qwirkle/main/ranking/ranking.component';
import { PlayerComponent } from './qwirkle/main/player/player.component';
import { GameComponent } from './qwirkle/main/game/game.component';
import { PlayerComponentComponent } from './qwirkle/main/game/player-component/player-component.component';
import { HttpService } from './service/http.service';
import { IoService } from './service/io.service';
import { ErrorEventService } from './service/error-event.service';
import { MainComponent } from './main/main.component';
import { MainYamComponent } from './yam/main-yam/main-yam.component';
import { StepComponent } from './yam/main-yam/step/step.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainQwirkleComponent,
    RankingComponent,
    PlayerComponent,
    GameComponent,
    PlayerComponentComponent,
    MainYamComponent,
    StepComponent
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
    MzCheckboxModule,
  ],
  providers: [
    HttpService,
    IoService,
    ErrorEventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
