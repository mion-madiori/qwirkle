import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/model/player';
import { HttpService } from 'src/app/service/http.service';
import { Utils } from 'src/app/utils';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  valueInArray: Array<boolean> = [];
  listPlayers: Array<Player> = [];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      const iterate:number = param['numbPlayers'];

      for(let i = 0; i < iterate; i++){
        this.valueInArray.push(true)
      }      
    })
  }

  onUpdate(player: Player){
    console.log(player);

    if(!this.listPlayers.includes(player)){
      console.log('non existant');
      this.listPlayers.push(player);
      return;
    } else {
      console.log('existant');
      
      for (let i = 0; i < this.listPlayers.length; i++) {
        if(this.listPlayers[i] === player){
          this.listPlayers[i] = player;
        }
      }
    }

    this.listPlayers.sort(Utils.compare);
  }

}
