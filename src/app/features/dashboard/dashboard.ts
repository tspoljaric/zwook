import { Component } from '@angular/core';
import { Sidebar } from "../../layout/sidebar/sidebar";
import { Navbar } from "../../layout/navbar/navbar";
import { MusicControl } from "../../layout/music-control/music-control";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Sidebar, Navbar, MusicControl, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  featured = [
    {
      image: '../images/abstract-image-1.png',
      title: 'Midnight Melodies',
      subtitle: 'New release “Impressions” coming June,16'
    },
    {
      image: '../images/abstract-image-2.png',
      title: 'Virgos',
      subtitle: 'New release “Impressions” coming July,29'
    }
  ];

  podcasts = [
    {
      title: 'Mind Matters',
      status: 'online',
      image: '../images/podcast-img.png'
    },
    {
      title: 'Tech Talk',
      status: 'offline',
      image: '../images/podcast-img-2.png'

    },
    {
      title: 'History Quest',
      status: 'online',
      image: '../images/podcast-img-3.png'

    },
    {
      title: 'Mystery Junction',
      status: 'online',
      image: '../images/podcast-img-4.png'

    },
    {
      title: 'Creative Minds',
      status: 'offline',
      image: '../images/podcast-img-5.png'

    }
  ];

  featuredArtists = [
    {
      image: '../images/artist-img-1.png',
      artist: 'Kiss Dorka'
    },
    {
      image: '../images/artist-img-2.png',
      artist: 'Luna Nova'
    },
    {
      image: '../images/artist-img-3.png',
      artist: 'Phantom Echos'
    },
    {
      image: '../images/artist-img-4.png',
      artist: 'Kiss Dorka'
    },
    {
      image: '../images/artist-img-5.png',
      artist: 'Max Sterling'
    },
    {
      image: '../images/artist-img-6.png',
      artist: 'Orion Starlight'
    },
    {
      image: '../images/artist-img-7.png',
      artist: 'Kiss Dorka'
    },
    {
      image: '../images/artist-img-8.png',
      artist: 'Phantom Echos'
    }
  ]

  categories = [
    {
      image: '../images/categ-img-1.png',
      artist: 'Balla Daniella'
    },
    {
      image: '../images/categ-img-2.png',
      artist: 'Luna Nova'
    },
    {
      image: '../images/categ-img-3.png',
      artist: 'Komodo Dragon'
    },
    {
      image: '../images/categ-img-4.png',
      artist: 'Kiss Dorka'
    },
    {
      image: '../images/categ-img-1.png',
      artist: 'Max Sterling'
    },
    {
      image: '../images/categ-img-5.png',
      artist: 'Orion Starlight'
    },
    {
      image: '../images/categ-img-2.png',
      artist: 'Kiss Dorka'
    },
    {
      image: '../images/categ-img-3.png',
      artist: 'Phantom Echos'
    }
  ]
}
