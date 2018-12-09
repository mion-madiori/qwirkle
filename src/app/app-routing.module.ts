import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RankingComponent } from './main/ranking/ranking.component';
import { PlayerComponent } from './main/player/player.component';
import { QuitGuard } from './guard/quit.guard';
import { GameComponent } from './main/game/game.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'ranking', component: RankingComponent},
  {path: 'allinone/:numbPlayers', component: GameComponent},
  {path: 'player/:id', component: PlayerComponent, canDeactivate: [QuitGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
