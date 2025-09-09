import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Podcast } from '../podcast.model';
import { PodcastService } from '../podcast';
import { Navbar } from '../../../layout/navbar/navbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-podcast-list',
  imports: [Navbar, CommonModule],
  templateUrl: './podcast-list.html',
  styleUrls: ['./podcast-list.scss']
})
export class PodcastList implements OnInit {
  podcasts: Podcast[] = [];

  constructor(private podcastService: PodcastService, private router: Router) {}

  ngOnInit(): void {
    this.podcasts = this.podcastService.getAll();
  }

  createPodcast() {
    this.router.navigate(['/podcasts/create']);
  }

  editPodcast(id: number) {
    this.router.navigate(['/podcasts/edit', id]);
  }

  deletePodcast(id: number) {
    this.podcastService.delete(id);
    this.podcasts = this.podcastService.getAll();
  }
}
