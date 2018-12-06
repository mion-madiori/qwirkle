import { Component, OnInit } from '@angular/core';
import { IoService } from 'src/app/service/io.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  
  messages;

  constructor(
    private ioService: IoService
  ) { 
    ioService.getMessage().subscribe(data => {
      this.messages = data;
      console.log(data);
      
    });
    ioService.getListPlayer().subscribe(data => {
      console.log(data);
      
    });
  }

  ngOnInit() {
    
  }

}
