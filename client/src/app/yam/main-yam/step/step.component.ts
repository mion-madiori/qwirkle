import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/model/player';
import { Rule } from '../../enum/rule.enum';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  @Input() players: Player[] = [];
  @Input() rule: Rule;
  points: number[] = []

  constructor() { }

  ngOnInit() {
    for(let i = 0; i <= 36; i++){
      this.points.push(i);
    }
  }

  setPoint(event, player: Player){
    console.log(event.target.value);
    console.log(player);
  }

}
