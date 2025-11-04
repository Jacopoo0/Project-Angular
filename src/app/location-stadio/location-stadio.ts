import { Component, Input } from '@angular/core';
import { Stadio } from '../location-stadio';
import {}

@Component({
  selector: 'app-location-stadio',
  imports: [],
template: `
  <section class="lista">
    <img class="lista-foto"
      [src]="locationstadio.foto"
      alt="foto esterna di {{locationstadio.nome}}">
    <h2 class="intestazione-elenco">{{locationstadio.nome}}</h2>
    <p class="lista-location">{{locationstadio.città}}, {{locationstadio.stato}}</p>
  </section>
`
,
  styleUrl: './location-stadio.css',
})
export class LocationStadio {
  @Input() Stadio!:Stadio;

}
