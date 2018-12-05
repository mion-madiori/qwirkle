import { Component, OnInit } from '@angular/core';
import { IoService } from 'src/app/service/io.service';
import { Subject} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  
  messages: Subject<any>;

  constructor(
    private ioService: IoService
  ) { 
    ioService.getMessage();
  }

  ngOnInit() {
    
    this.ioService.sendMessage();
  }

}
