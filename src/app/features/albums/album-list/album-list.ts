import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-list',
  imports: [CommonModule],
  templateUrl: './album-list.html',
  styleUrl: './album-list.scss'
})
export class AlbumList {
  sections = [
    {
      title: 'Recommended for you',
      albums: [
        { cover: '../images/artist-img-1.png', title: 'Waves of Tomorrow', artist: 'Samantha Klein', year: '2021' },
        { cover: '../images/artist-img-2.png', title: 'Electric Horizon', artist: 'Jonas Richter', year: '2022' },
        { cover: '../images/artist-img-3.png', title: 'Whispers in the Dark', artist: 'Elena Rossi', year: '2020' },
        { cover: '../images/artist-img-4.png', title: 'Golden Echoes', artist: 'Marcus van der Berg', year: '2023' },
        { cover: '../images/artist-img-5.png', title: 'Fragments of Time', artist: 'Layla Haddad', year: '2019' },
        { cover: '../images/artist-img-6.png', title: 'Beyond the Silence', artist: 'Kenji Sato', year: '2021' },
        { cover: '../images/artist-img-7.png', title: 'Velvet Skies', artist: 'David Okafor', year: '2022' },
        { cover: '../images/artist-img-8.png', title: 'Parallel Dreams', artist: 'Nora Williams', year: '2020' },
      ],
    },
    {
      title: 'Popular releases',
      albums: [
        { cover: '../images/artist-img-8.png', title: 'Neon City Nights', artist: 'Tomás Alvarez', year: '2020' },
        { cover: '../images/artist-img-7.png', title: 'Shadows & Sparks', artist: 'Ana-Maria Popescu', year: '2020' },
        { cover: '../images/artist-img-6.png', title: 'Echo Chamber', artist: 'Samantha Klein', year: '2020' },
        { cover: '../images/artist-img-5.png', title: 'Midnight Bloom', artist: 'Elena Rossi', year: '2020' },
        { cover: '../images/artist-img-4.png', title: 'Rhythm of Glass', artist: 'Jonas Richter', year: '2020' },
        { cover: '../images/artist-img-3.png', title: 'Starlit Avenue', artist: 'Marcus van der Berg', year: '2020' },
        { cover: '../images/artist-img-2.png', title: 'Wildfire Hearts', artist: 'Nora Williams', year: '2020' },
        { cover: '../images/artist-img-1.png', title: 'The Last Train Home', artist: 'David Okafor', year: '2020' },
      ],
    },
    {
      title: 'Discover',
      albums: [
        { cover: '../images/artist-img-1.png', title: 'Crimson Horizon', artist: 'Kenji Sato', year: '2020' },
        { cover: '../images/artist-img-2.png', title: 'Moonlit Shadows', artist: 'Elena Rossi', year: '2020' },
        { cover: '../images/artist-img-3.png', title: 'Silent Compass', artist: 'Jonas Richter', year: '2020' },
        { cover: '../images/artist-img-4.png', title: 'Garden of Echoes', artist: 'Samantha Klein', year: '2020' },
        { cover: '../images/artist-img-5.png', title: 'Blue Ember', artist: 'Marcus van der Berg', year: '2020' },
        { cover: '../images/artist-img-6.png', title: 'Wandering Skies', artist: 'Layla Haddad', year: '2020' },
        { cover: '../images/artist-img-7.png', title: 'Fragments in Bloom', artist: 'Tomás Alvarez', year: '2020' },
        { cover: '../images/artist-img-8.png', title: 'The Painted Veil', artist: 'Ana-Maria Popescu', year: '2020' },
      ],
    },
  ];
}
