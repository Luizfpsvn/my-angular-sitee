import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>

    <app-home></app-home>

    <app-contact></app-contact>

    <!-- routes get injected hr -->
    <router-outlet></router-outlet>

    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'my-angular-site';
}
