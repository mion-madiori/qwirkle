import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainQwirkleComponent } from './qwirkle/main/main-qwirkle.component';
import { RankingComponent } from './qwirkle/main/ranking/ranking.component';
import { PlayerComponent } from './qwirkle/main/player/player.component';
import { QuitGuard } from './guard/quit.guard';
import { GameComponent } from './qwirkle/main/game/game.component';
import { MainComponent } from './main/main.component';
import { MainYamComponent } from './yam/main-yam/main-yam.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'qwirkle', component: MainQwirkleComponent},
  {path: 'yam', component: MainYamComponent},
  {path: 'qwirkle/ranking', component: RankingComponent},
  {path: 'qwirkle/allinone/:numbPlayers', component: GameComponent},
  {path: 'qwirkle/player/:id', component: PlayerComponent, canDeactivate: [QuitGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
