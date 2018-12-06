import { Component, OnInit } from '@angular/core';
import { Player } from '../model/player';
import { HttpService } from '../service/http.service';
import { IoService } from '../service/io.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  initplayers: Array<Player> = []

  constructor(
    private httpService: HttpService,
    private ioService: IoService
  ) { }

  ngOnInit() {
    this.httpService.getPlayers().subscribe((players:any) => {
      this.initplayers = players.players;
    })
    
  }

}
