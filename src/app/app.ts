import { Component } from '@angular/core';
import { Stadium } from './stadium/stadium';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Stadium]
})
export class App {
  title = 'Stadium';
}
