import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationStadio } from '../location-stadio/location-stadio';
@Component({
  selector: 'app-stadium',
  imports: [CommonModule,LocationStadio],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Cerca</button>
    </form>
  </section>
  <section class="Risultato">
  </section>
  <app-location-stadio></app-location-stadio>
  `,
  styleUrl: './stadium.css',
})
export class Stadium {

}
