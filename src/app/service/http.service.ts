import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  getPlayers(): Observable<Array<Player>> {
    return this.http.get<Array<Player>>('./assets/data/players.json');
  }

  getOnePlayer(id: any): Promise<Player> {
    return new Promise((resolve, reject) => {
      if (id > -1) {
        this.http.get<Array<Player>>('./assets/data/players.json').subscribe((data: any) => {
          
          data.players.forEach(player => {
            
            if (player.id === +id) {
              
              resolve(player);
            }
          });
        })
      } else {
        reject('id invalide!');
      }
    })
  }
}
