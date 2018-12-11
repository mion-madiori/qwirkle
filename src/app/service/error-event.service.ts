import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorEventService {

  private connectEventSource = new Subject<boolean>();
  private disconnectEventSource = new Subject<boolean>();
  private errorConnectEventSource = new Subject<boolean>();

  connectEvent$ = this.connectEventSource.asObservable();
  disconnectEvent$ = this.disconnectEventSource.asObservable();
  errorConnectEvent$ = this.errorConnectEventSource.asObservable();

  sendConnectEvent(ev: boolean){
    this.connectEventSource.next(ev);
  }

  sendDisconnectEvent(ev: boolean){
    this.disconnectEventSource.next(ev);
  }

  sendErrorConnectEvent(ev: boolean){
    this.errorConnectEventSource.next(ev);
  }
}
