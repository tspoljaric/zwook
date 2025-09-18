import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Podcast } from '../podcast.model';
import { PodcastService } from '../podcast';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-podcast-list',
  imports: [CommonModule],
  templateUrl: './podcast-list.html',
  styleUrls: ['./podcast-list.scss']
})

export class PodcastList implements OnInit {
  podcasts: Podcast[] = [];
  featured = [
    {
      image: '../images/abstract-image-1.png',
      title: 'Mind Matters',
    },
    {
      image: '../images/abstract-image-2.png',
      title: 'Tech Talk',
    }
  ];

  categories = [
    {
      image: '../images/artist-img-1.png',
      artist: 'Comedy'
    },
    {
      image: '../images/artist-img-2.png',
      artist: 'History'
    },
    {
      image: '../images/artist-img-3.png',
      artist: 'Technology & Innovation'
    },
    {
      image: '../images/artist-img-4.png',
      artist: 'Politics'
    },
    {
      image: '../images/artist-img-5.png',
      artist: 'Sports News'
    },
    {
      image: '../images/artist-img-6.png',
      artist: 'Food & Cooking'
    },
    {
      image: '../images/artist-img-7.png',
      artist: 'AI & Future Tech'
    },
    {
      image: '../images/artist-img-8.png',
      artist: 'Gaming'
    }
  ];
  openMenuId: number | null = null;

  constructor(private podcastService: PodcastService, private router: Router) { }

  ngOnInit(): void {
    this.podcasts = this.podcastService.getAll();
  }

  editPodcast(id: number) {
    this.router.navigate(['/podcasts/edit', id]);
  }

  deletePodcast(id: number) {
    this.podcastService.delete(id);
    this.podcasts = this.podcastService.getAll();
  }

  toggleMenu(id: number) {
    this.openMenuId = this.openMenuId === id ? null : id;
  }
}
