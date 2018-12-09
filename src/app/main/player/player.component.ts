import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { Player } from 'src/app/model/player';
import { IoService } from 'src/app/service/io.service';
import { MzToastService } from 'ngx-materialize';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  player: Player = {
    id: -1,
    firstname: '',
    lastname: '',
    score: 0
  };

  score: number = 0;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private ioService: IoService,
    private toastService: MzToastService
  ) {
    ioService.getPlayerAdded().subscribe(data => {
      toastService.show(`${data.firstname} ${data.lastname} est arrivé(e)!!! ^^`, 3000);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.httpService.getOnePlayer(param['id']).then(player => {
        console.log(player);
        this.ioService.sendPlayer(player);
        this.player = player;
      })
    })
  }
  
  canDeactivate(){
    this.ioService.destroyPlayer(this.player);
    return true;
  }

  submit(operator: true){

    if(this.score > 0){
      if(operator){
        this.player.score += this.score;
      } else {
        this.player.score -= this.score;
      }
    }
    
    this.ioService.updateScore(this.player);

    this.score = 0;
  }

}
