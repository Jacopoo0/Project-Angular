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
  filtroLeague: string = 'all';
  
  stadioList: Stadio[] = [
    {
      id: 0,
      name: 'San Siro',
      city: 'Milano',
      state: 'Italia',
      photo: 'sansiro.jpg',
      capacity: 80018,
      league: 'Serie A',
      url: 'https://it.wikipedia.org/wiki/Stadio_Giuseppe_Meazza',
      color: '#0E4C92'
    },
    {
      id: 1,
      name: 'Stadio Olimpico',
      city: 'Roma',
      state: 'Italia',
      photo: 'olimpico.jpg',
      capacity: 70634,
      league: 'Serie A',
      url: 'https://it.wikipedia.org/wiki/Stadio_Olimpico_(Roma)',
      color: '#C8102E'
    },
    {
      id: 2,
      name: 'Allianz Stadium',
      city: 'Torino',
      state: 'Italia',
      photo: 'juventus.jpg',
      capacity: 41507,
      league: 'Serie A',
      url: 'https://it.wikipedia.org/wiki/Allianz_Stadium',
      color: '#000000'
    },
    {
      id: 3,
      name: 'Diego Armando Maradona',
      city: 'Napoli',
      state: 'Italia',
      photo: 'sanpaolo.jpg',
      capacity: 54726,
      league: 'Serie A',
      url: 'https://it.wikipedia.org/wiki/Stadio_Diego_Armando_Maradona',
      color: '#0067B5'
    },
    {
      id: 4,
      name: 'Renato Dall\'Ara',
      city: 'Bologna',
      state: 'Italia',
      photo: 'bologna.jpg',
      capacity: 37411,
      league: 'Serie A',
      url: 'https://it.wikipedia.org/wiki/Stadio_Renato_Dall%27Ara',
      color: '#0033A0'
    },
    {
      id: 5,
      name: 'Artemio Franchi',
      city: 'Firenze',
      state: 'Italia',
      photo: 'franchi.jpg',
      capacity: 43282,
      league: 'Serie A',
      url: 'https://it.wikipedia.org/wiki/Stadio_Artemio_Franchi',
      color: '#6A2C91'
    },
    {
      id: 6,
      name: 'Stadio Friuli',
      city: 'Udine',
      state: 'Italia',
      photo: 'friuli.png',
      capacity: 25132,
      league: 'Serie A',
      url: 'https://it.wikipedia.org/wiki/Stadio_Friuli',
      color: '#000000'
    },
    {
      id: 7,
      name: 'Gewiss Stadium',
      city: 'Bergamo',
      state: 'Italia',
      photo: 'newbalance.png',
      capacity: 23439,
      league: 'Serie A',
      url: 'https://it.wikipedia.org/wiki/Stadio_di_Bergamo',
      color: '#1A1A1A'
    },
    {
      id: 8,
      name: 'Stadio Luigi Ferraris',
      city: 'Genova',
      state: 'Italia',
      photo: 'ferraris.png',
      capacity: 36536,
      league: 'Serie A',
      url: 'https://it.wikipedia.org/wiki/Stadio_Luigi_Ferraris',
      color: '#C8102E'
    },
    {
      id: 9,
      name: 'Stadio Marcantonio Bentegodi',
      city: 'Verona',
      state: 'Italia',
      photo: 'bentegodi.png',
      capacity: 39371,
      league: 'Serie A',
      url: 'https://it.wikipedia.org/wiki/Stadio_Marcantonio_Bentegodi',
      color: '#0E5CA9'
    },
    {
      id: 10,
      name: 'Wembley Stadium',
      city: 'London',
      state: 'England',
      photo: 'wembley.jpg',
      capacity: 90000,
      league: 'Premier League',
      url: 'https://en.wikipedia.org/wiki/Wembley_Stadium',
      color: '#034694'
    },
    {
      id: 11,
      name: 'Old Trafford',
      city: 'Manchester',
      state: 'England',
      photo: 'oldtrafford.jpg',
      capacity: 74879,
      league: 'Premier League',
      url: 'https://en.wikipedia.org/wiki/Old_Trafford',
      color: '#DA291C'
    },
    {
      id: 12,
      name: 'Camp Nou',
      city: 'Barcelona',
      state: 'Spain',
      photo: 'campnou.jpg',
      capacity: 99354,
      league: 'La Liga',
      url: 'https://en.wikipedia.org/wiki/Camp_Nou',
      color: '#A50044'
    },
    {
      id: 13,
      name: 'Santiago Bernabéu',
      city: 'Madrid',
      state: 'Spain',
      photo: 'bernabeu.jpg',
      capacity: 81044,
      league: 'La Liga',
      url: 'https://en.wikipedia.org/wiki/Santiago_Bernab%C3%A9u_Stadium',
      color: '#FEBE10'
    },
    {
      id: 14,
      name: 'Allianz Arena',
      city: 'Munich',
      state: 'Germany',
      photo: 'allianzarena.jpg',
      capacity: 75024,
      league: 'Bundesliga',
      url: 'https://en.wikipedia.org/wiki/Allianz_Arena',
      color: '#DC052D'
    },
    {
      id: 15,
      name: 'Signal Iduna Park',
      city: 'Dortmund',
      state: 'Germany',
      photo: 'dortmund.jpg',
      capacity: 81365,
      league: 'Bundesliga',
      url: 'https://en.wikipedia.org/wiki/Signal_Iduna_Park',
      color: '#FDE100'
    }
  ];

  stadioListFiltrata: Stadio[] = this.stadioList;


  filtraStadi() {
    this.stadioListFiltrata = this.stadioList;
    
    if (this.filtroLeague !== 'all') {
      this.stadioListFiltrata = this.stadioListFiltrata.filter(stadio =>
        stadio.league === this.filtroLeague
      );
    }
    
    if (this.filtroCity) {
      this.stadioListFiltrata = this.stadioListFiltrata.filter(stadio =>
        stadio.name.toLowerCase().includes(this.filtroCity.toLowerCase())
      );
    }
  }
} 
