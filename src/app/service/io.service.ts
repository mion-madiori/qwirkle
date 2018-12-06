import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { Player } from '../model/player';

const SERVER_URL = 'http://localhost:3000';
 
@Injectable({
  providedIn: 'root'
})
export class IoService {

  private socket;

  constructor(
    
  ) { 
    this.initSocket();
  }

  initSocket(){
    this.socket = io(SERVER_URL);
  }

  sendPlayer(player:Player){
    console.log('sendplayer');
    
    this.socket.emit('addPlayer', player);
  }

  getMessage(): Observable<string>{
    return new Observable<string>(observer => {
      this.socket.on('messageSending', data => {
        observer.next(data);
      })
    })
  }

  getListPlayer(): Observable<Array<Player>>{
    return new Observable<Array<Player>>(observer => {
      this.socket.on('listPlayer', data => {
        observer.next(data);
      })
    })
  }
}
