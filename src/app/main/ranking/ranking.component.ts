import { Component, OnInit } from '@angular/core';
import { IoService } from 'src/app/service/io.service';
import { Player } from 'src/app/model/player';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  
  listPlayers: Array<Player>;

  constructor(
    private ioService: IoService
  ) {
    ioService.getListPlayer().subscribe(data => {
      this.listPlayers = data
      console.log(this.listPlayers);
      
    });
  }

  ngOnInit() {
    this.ioService.getListPlayerOnStart();
  }

}
