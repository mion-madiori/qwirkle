import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RankingComponent } from './main/ranking/ranking.component';
import { PlayerComponent } from './main/player/player.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'ranking', component: RankingComponent},
  {path: 'player/:id', component: PlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
