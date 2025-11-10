import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocationStadio } from '../location-stadio/location-stadio';
import { Stadio } from '../stadiumspec';

@Component({
  selector: 'app-stadium',
  standalone: true,
  imports: [CommonModule, LocationStadio, FormsModule],
  templateUrl: './stadium.html',  
  styleUrl: './stadium.css',
})
export class Stadium {
  filtroCity: string = '';
  
  stadioList: Stadio[] = [
    {
      id: 0,
      name: 'San Siro',
      city: 'Milano',
      state: 'Italia',
      photo: 'sansiro.jpg',
      capacity: 80018,
      league: 'Serie A',
      url: 'https://it.wikipedia.org/wiki/Stadio_Giuseppe_Meazza'
    },
    {
      id: 1,
      name: 'Stadio Olimpico',
      city: 'Roma',
      state: 'Italia',
      photo: 'olimpico.jpg',
      capacity: 70634,
      league: 'Serie A',
      url: 'https://it.wikipedia.org/wiki/Stadio_Olimpico_(Roma)'
    },
    {
      id: 2,
      name: 'Allianz Stadium',
      city: 'Torino',
      state: 'Italia',
      photo: 'juventus.jpg',
      capacity: 41507,
      league: 'Serie A',
      url: 'https://it.wikipedia.org/wiki/Allianz_Stadium'
    },
    {
      id: 3,
      name: 'Diego Armando Maradona',
      city: 'Napoli',
      state: 'Italia',
      photo: 'sanpaolo.jpg',
      capacity: 54726,
      league: 'Serie A',
      url: 'https://it.wikipedia.org/wiki/Stadio_Diego_Armando_Maradona'
    },
    {
      id: 4,
      name: 'Renato Dall\'Ara',
      city: 'Bologna',
      state: 'Italia',
      photo: 'bologna.jpg',
      capacity: 37411,
      league: 'Serie A',
      url: 'https://it.wikipedia.org/wiki/Stadio_Renato_Dall%27Ara'
    },
    {
      id: 5,
      name: 'Artemio Franchi',
      city: 'Firenze',
      state: 'Italia',
      photo: 'franchi.jpg',
      capacity: 43282,
      league: 'Serie A',
      url: 'https://it.wikipedia.org/wiki/Stadio_Artemio_Franchi'
    },
    {
      id: 6,
      name: 'Stadio Friuli',
      city: 'Udine',
      state: 'Italia',
      photo: 'friuli.png',
      capacity: 25132,
      league: 'Serie A',
      url: 'https://it.wikipedia.org/wiki/Stadio_Friuli'
    },
    {
      id: 7,
      name: 'Gewiss Stadium',
      city: 'Bergamo',
      state: 'Italia',
      photo: 'newbalance.png',
      capacity: 23439,
      league: 'Serie A',
      url: 'https://it.wikipedia.org/wiki/Stadio_di_Bergamo'
    },
    {
      id: 8,
      name: 'Stadio Luigi Ferraris',
      city: 'Genova',
      state: 'Italia',
      photo: 'ferraris.png',
      capacity: 36536,
      league: 'Serie A',
      url: 'https://it.wikipedia.org/wiki/Stadio_Luigi_Ferraris'
    },
    {
      id: 9,
      name: 'Old Trafford',
      city: 'Manchester',
      state: 'England',
      photo: 'oldtrafford.jpg',
      capacity: 74197,
      league: 'Premier League',
      url: 'https://it.wikipedia.org/wiki/Old_Trafford'
    },
    {
      id: 10,
      name: 'Wembley Stadium',
      city: 'London',
      state: 'England',
      photo: 'wembley.jpg',
      capacity: 90000,
      league: 'Premier League',
      url: 'https://en.wikipedia.org/wiki/Wembley_Stadium'
    },
    {
      id: 11,
      name: 'Camp Nou',
      city: 'Barcelona',
      state: 'Spain',
      photo: 'campnou.jpg',
      capacity: 99354,
      league: 'La Liga',
      url: 'https://en.wikipedia.org/wiki/Camp_Nou'
    },
    {
      id: 12,
      name: 'Santiago Bernabéu',
      city: 'Madrid',
      state: 'Spain',
      photo: 'bernabeu.jpg',
      capacity: 81044,
      league: 'La Liga',
      url: 'https://en.wikipedia.org/wiki/Santiago_Bernab%C3%A9u_Stadium'
    },
    {
      id: 13,
      name: 'Allianz Arena',
      city: 'Munich',
      state: 'Germany',
      photo: 'allianzarena.jpg',
      capacity: 75024,
      league: 'Bundesliga',
      url: 'https://en.wikipedia.org/wiki/Allianz_Arena'
    },
    {
      id: 14,
      name: 'Signal Iduna Park',
      city: 'Dortmund',
      state: 'Germany',
      photo: 'dortmund.jpg',
      capacity: 81365,
      league: 'Bundesliga',
      url: 'https://en.wikipedia.org/wiki/Signal_Iduna_Park'
    }
  ];

  stadioListFiltrata: Stadio[] = this.stadioList;

  filtraStadi() {
    if (!this.filtroCity) {
      this.stadioListFiltrata = this.stadioList;
    } else {
      this.stadioListFiltrata = this.stadioList.filter(stadio =>
        stadio.city.toLowerCase().includes(this.filtroCity.toLowerCase())
      );
    }
  }
}
