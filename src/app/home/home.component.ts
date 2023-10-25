import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-primary is-bold is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Hero section</h1>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        background-image: url('../../assets/img/pexels-bayram-musayev-18395712.jpg') !important;
        background-size: cover;
        background-position: center center;
      }
    `
  ]
})
export class HomeComponent {}
