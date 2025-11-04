import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Stadium } from './stadium/stadium';

@Component({
  selector: 'app-root',
  template: `
    <main> 
      <header class="brand-name">
        <img class="brand-logo"
        src="image.png"
        alt="logo" aria-hidden="true"
        style="width: 100px; height: auto;">
      </header>
      <section class="content">
        <app-stadium></app-stadium>
      </section>
    </main>
  `,
  styleUrl: './app.css',
  imports:  [Stadium]
})
export class App {
  title = 'Stadium';
}
