import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { Player } from 'src/app/model/player';

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

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.httpService.getOnePlayer(param['id']).then(player => {
        console.log(player);
        
        this.player = player;
      })
    })
  }

}
