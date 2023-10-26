import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-primary is-bold is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            O Designer saiu de férias e não quis deixar o texto pronto, logo
            qualquer texto aleatorio aqui até ele voltar kkkk
          </h1>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        background-image: url('../../assets/img/mohammad-rahmani-q1p2DrLBtko-unsplash.jpg') !important;
        background-size: cover;
        background-position: center center;
      }
    `
  ]
})
export class HomeComponent {}
