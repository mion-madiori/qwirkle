import { Component, OnInit, OnDestroy } from '@angular/core';
import { Player } from '../../model/player';
import { HttpService } from '../../service/http.service';
import { ErrorEventService } from '../../service/error-event.service';
import { MzToastService } from 'ngx-materialize';
import { Subscription } from 'rxjs';
import { IoService } from '../../service/io.service';

@Component({
  selector: 'app-main',
  templateUrl: './main-qwirkle.component.html',
  styleUrls: ['./main-qwirkle.component.scss'],
  providers: []
})
export class MainQwirkleComponent implements OnInit, OnDestroy {
  initplayers: Array<Player> = []

  errorSubscription: Subscription;
  connectSubscription: Subscription;
  disconnectSubscription: Subscription;
  maxPlayerSubscription: Subscription;

  isError: boolean = false;

  isRankingPlayerDisabled: boolean = true;
  isPlayerDisabled: boolean = true;

  constructor(
    private httpService: HttpService,
    private errorService: ErrorEventService,
    private toastService: MzToastService,
    private ioService: IoService
  ) { }

  ngOnInit() {
    this.httpService.getPlayers().subscribe((players: any) => {
      this.initplayers = players.players;
    })

    this.ioService.initSocket();

    this.errorSubscription = this.errorService.connectEvent$.subscribe(value => {
      if (value){
        this.toastService.show('Connexion établie', 4000, 'green');
        this.isRankingPlayerDisabled = false;
        this.isError = false;
      }
    });

    this.disconnectSubscription = this.errorService.disconnectEvent$.subscribe(value => {
      console.log('disconnect: ' + value);
      
      if (value){
        this.toastService.show('Déconnexion du serveur', 4000, 'yellow');
        this.isRankingPlayerDisabled = true;
      }
    });

    this.errorSubscription = this.errorService.errorConnectEvent$.subscribe(value => {
      console.log('error: ' + value);
      
      if (value){
        if(!this.isError){
          this.toastService.show('Erreur de connexion', 4000, 'red');
          this.isRankingPlayerDisabled = true;
          this.isError = true;
        }
      }
    })

    this.maxPlayerSubscription = this.errorService.maxPlayerConnectEvent$.subscribe(value => {
      console.log('max: ' + value);
      
      if(value){
        this.toastService.show('Nombre maximum de joueurs atteind.', 4000, 'red');
      }
    })
  }

  ngOnDestroy(){
    // this.errorSubscription.unsubscribe();
    // this.disconnectSubscription.unsubscribe();
    // this.connectSubscription.unsubscribe();
  }

}
