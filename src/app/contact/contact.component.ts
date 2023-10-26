import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-primary is-bold">
      <div class="hero-body is-dark">
        <div class="container">
          <h1 class="title">Contatos</h1>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <form (ngSubmit)="submitForm()" #contactForm="ngForm">
          <div class="field">
            <label class="label">Nome</label>
            <input
              type="text"
              name="name"
              class="input"
              [(ngModel)]="name"
              #nameInput="ngModel"
              required
            />

            <div
              class="help is-error"
              *ngIf="nameInput.invalid && nameInput.untouched"
            >
              Seu nome é necessário
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <input
              type="email"
              name="email"
              class="input"
              [(ngModel)]="email"
              #emailInput="ngModel"
              required
            />

            <div
              class="help is-error"
              *ngIf="emailInput.invalid && emailInput.untouched"
            >
              Email obrigatorio e precisa ser um email valido
            </div>
          </div>

          <div class="field">
            <label class="label">Your message</label>
            <textarea
              name="message"
              class="textarea"
              [(ngModel)]="message"
            ></textarea>
          </div>
          <button
            type="submit"
            class="button is-large is-warning"
            [disabled]="contactForm.invalid"
          >
            Enviar formulário
          </button>
        </form>
      </div>
    </section>
  `,
  styles: [
    `
      .hero-body {
        background: #81007f;
      }
    `
  ]
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  submitForm() {
    alert(
      `Eu estou enviando as seguintes informações: \n 
      Nome: ${this.name} \n  
      Email: ${this.email} \n 
      Mensagem: ${this.message}`
    );
  }
}
