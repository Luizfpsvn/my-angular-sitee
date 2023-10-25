import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>HELLO WORLD OF ANGULAR!</h1>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'my-angular-site';
}
