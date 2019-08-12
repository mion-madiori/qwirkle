import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Player } from 'src/app/model/player';
import { Rule } from '../enum/rule.enum';

@Component({
  selector: 'app-main-yam',
  templateUrl: './main-yam.component.html',
  styleUrls: ['./main-yam.component.scss']
})
export class MainYamComponent implements OnInit {

  listPlayers: Player[] = [];
  rules: Rule[] = [Rule.FourSameColor, Rule.LessThanThreeSameColor, Rule.NoThisColor, Rule.SameNumberOfTwoColors]

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.httpService.getPlayers().subscribe(players => this.listPlayers = players);
  }

}
