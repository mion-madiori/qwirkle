import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, observable } from 'rxjs';
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

  initSocket() {
    this.socket = io(SERVER_URL);
  }

  sendPlayer(player: Player) {
    console.log('sendplayer');

    this.socket.emit('addPlayer', player);
  }
  
  getListPlayer(): Observable<Array<Player>> {
    return new Observable<Array<Player>>(observer => {
      this.socket.on('sendPlayers', data => {
        observer.next(data);
      })
    })
  }
  getPlayerAdded(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('playerAdded', data => {
        observer.next(data);
      })
    })
  }

  getListPlayerOnStart(): any {
    this.socket.emit('getPlayers');
  }

  destroyPlayer(player: Player){
    this.socket.emit('destroyPlayer', player);
  }
}
