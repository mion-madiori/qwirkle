import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SocketIoConfig, SocketIoModule } from 'ng-socket-io';

import {
  MzButtonModule,
  MzNavbarModule,
  MzDropdownModule,
  MzInputModule,
  MzCardModule,
} from 'ngx-materialize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RankingComponent } from './main/ranking/ranking.component';
import { PlayerComponent } from './main/player/player.component';
import { HttpService } from './service/http.service';
import { IoService } from './service/io.service';

const config: SocketIoConfig = {url: 'http://localhost:3000', options: {}};

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
    FormsModule,

    MzButtonModule,
    MzNavbarModule,
    MzDropdownModule, 
    MzInputModule,
    MzCardModule,

    SocketIoModule.forRoot(config)
  ],
  providers: [
    HttpService,
    IoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
