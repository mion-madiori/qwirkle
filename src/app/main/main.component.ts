import { Component, OnInit, OnDestroy } from '@angular/core';
import { Player } from '../model/player';
import { HttpService } from '../service/http.service';
import { ErrorEventService } from '../service/error-event.service';
import { MzToastService } from 'ngx-materialize';
import { Subscription } from 'rxjs';
import { IoService } from '../service/io.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: []
})
export class MainComponent implements OnInit, OnDestroy {
  initplayers: Array<Player> = []

  errorSubscription: Subscription;
  connectSubscription: Subscription;
  disconnectSubscription: Subscription;

  isDisabled: boolean = true;

  constructor(
    private httpService: HttpService,
    private errorService: ErrorEventService,
    private toastService: MzToastService,
    private ioService: IoService
  ) {
    ioService.initSocket();

    this.errorSubscription = errorService.connectEvent$.subscribe(value => {
      console.log('connect: ' + value);
      
      if (value){
        this.toastService.show('Connexion établie', 4000, 'green');
        this.isDisabled = false;
      }
    });

    this.disconnectSubscription = errorService.disconnectEvent$.subscribe(value => {
      console.log('disconnect: ' + value);
      
      if (value){
        this.toastService.show('Déconnexion du serveur', 4000, 'yellow');
        this.isDisabled = true;
      }
    });

    this.errorSubscription = errorService.errorConnectEvent$.subscribe(value => {
      console.log('error: ' + value);
      
      if (value){
        this.toastService.show('Erreur de connexion', 4000, 'red');
        this.isDisabled = true;
      }
    })
  }

  ngOnInit() {
    this.httpService.getPlayers().subscribe((players: any) => {
      this.initplayers = players.players;
    })
  }

  ngOnDestroy(){
    this.errorSubscription.unsubscribe();
    this.disconnectSubscription.unsubscribe();
    this.connectSubscription.unsubscribe();
  }

}
