import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Player } from 'src/app/model/player';

@Component({
  selector: 'app-player-component',
  templateUrl: './player-component.component.html',
  styleUrls: ['./player-component.component.scss']
})
export class PlayerComponentComponent implements OnInit {
  @Output() update = new EventEmitter<Player>();

  playersAvailable: Array<Player> = [];
  score: number = 0;

  player: Player = {
    id: -1,
    firstname: '',
    lastname: '',
    score: 0
  };

  constructor(
    private httpService: HttpService
    ) { }

  ngOnInit() {
    this.httpService.getPlayers().subscribe((players:any) => {
      this.playersAvailable = players.players;
    })
  }

  onChange(value){
    for (let i = 0; i < this.playersAvailable.length; i++) {
      if(this.playersAvailable[i].id == value){
        this.player = this.playersAvailable[i];
        this.update.emit(this.player);
        return;
      }
    } 
  }

  updateScore(addition: boolean){
    if(addEventListener){
      this.player.score += this.score;
    } else {
      this.player.score -= this.score;
    }

    this.update.emit(this.player);
  }

}
