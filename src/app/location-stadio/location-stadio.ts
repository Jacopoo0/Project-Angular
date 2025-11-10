import { Component, Input } from '@angular/core';
import { Stadio } from '../stadiumspec';

@Component({
  selector: 'app-location-stadio',
  standalone: true,
  imports: [],
  templateUrl: './location-stadio.html',  
  styleUrl: './location-stadio.css',
})
export class LocationStadio {
  @Input() locationstadio!: Stadio;
}
