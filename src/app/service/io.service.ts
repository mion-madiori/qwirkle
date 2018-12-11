import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, observable } from 'rxjs';
import { Player } from '../model/player';
import { ErrorEventService } from './error-event.service';

const SERVER_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class IoService {

  private socket;

  constructor(
    private errorService: ErrorEventService
  ) {
    this.initSocket();

    this.socket.on('connect_error', () => {
      console.error('Erreur de connection au serveur.');
      errorService.sendErrorConnectEvent(true);
    })

    this.socket.on('connect', () => {
      console.info('Connexion au serveur établie.');
      errorService.sendConnectEvent(true);
    })

    this.socket.on('disonnect', () => {
      console.warn('Connexion au serveur interrompue.');
      errorService.sendDisconnectEvent(true);
    }) 
  }

  initSocket() {
    this.socket = io(SERVER_URL, { reconnection: true, reconnectionDelay: 3000 });
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

  destroyPlayer(player: Player) {
    this.socket.emit('destroyPlayer', player);
  }

  updateScore(score: Player) {
    this.socket.emit('setScore', score);
  }
}
