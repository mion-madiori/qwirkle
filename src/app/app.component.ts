import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <mz-navbar>
    <a href="#" class="brand-logo" >Qwirkle</a>
  </mz-navbar>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'mionQwirkle';
}
