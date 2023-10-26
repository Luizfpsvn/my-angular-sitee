import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: ` <header class="navbar is-dark">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="../../assets/img/ts-logo.svg" alt="" />
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item" routerLink="/">Home</div>
        <div class="navbar-item" routerLink="/contact">Contato</div>
        <div class="navbar-item" routerLink="/users">Usuários</div>
      </div>
    </div>
  </header>`,
  styles: []
})
export class HeaderComponent {}
