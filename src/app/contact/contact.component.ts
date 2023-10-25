import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Contatos</h1>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <form (ngSubmit)="submitForm()">
          <div class="field">
            <label class="label">Nome</label>
            <input type="text" name="name" class="input" [(ngModel)]="name" />
          </div>

          <div class="field">
            <label class="label">Email</label>
            <input
              type="email"
              name="email"
              class="input"
              [(ngModel)]="email"
            />
          </div>

          <div class="field">
            <label class="label">Your message</label>
            <textarea
              name="message"
              class="textarea"
              [(ngModel)]="message"
            ></textarea>
          </div>
          <button type="submit" class="button is-large is-warning">
            Enviar formulário
          </button>
        </form>
      </div>
    </section>
  `,
  styles: []
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
