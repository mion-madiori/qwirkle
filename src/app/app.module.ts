import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {
  MzButtonModule,
  MzNavbarModule,
  MzDropdownModule,
} from 'ngx-materialize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RankingComponent } from './main/ranking/ranking.component';
import { PlayerComponent } from './main/player/player.component';
import { HttpService } from './service/http.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RankingComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MzButtonModule,
    MzNavbarModule,
    MzDropdownModule, 
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
