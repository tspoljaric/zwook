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
      image: '../images/categ-3.jpg',
      artist: 'Comedy'
    },
    {
      image: '../images/categ-8.jpg',
      artist: 'History'
    },
    {
      image: '../images/categ-1.jpg',
      artist: 'Technology & Innovation'
    },
    {
      image: '../images/categ-7.jpg',
      artist: 'Politics'
    },
    {
      image: '../images/categ-2.jpg',
      artist: 'Sports News'
    },
    {
      image: '../images/categ-6.jpg',
      artist: 'Food & Cooking'
    },
    {
      image: '../images/categ-5.jpg',
      artist: 'AI & Future Tech'
    },
    {
      image: '../images/categ-4.jpg',
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
