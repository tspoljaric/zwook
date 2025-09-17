import { Injectable } from '@angular/core';
import { Podcast } from './podcast.model';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {
  private storageKey = 'podcasts';
  private idKey = 'nextId';

  private defaultPodcasts: Podcast[] = [
    {
      id: 1,
      title: 'History Quest',
      creator: 'Marcus van der Berg',
      status: true,
      premium: true,
      makeDefault: false,
      visible: true,
      imageUrl: '../images/podcast-img-3.png',
      duration: '25:23',
      description: 'Quick dives into fascinating moments from the past'
    },
    {
      id: 2,
      title: 'Mystery Junction',
      creator: 'David Okafor',
      status: true,
      premium: true,
      makeDefault: false,
      visible: true,
      imageUrl: '../images/podcast-img-4.png',
      duration: '30:33',
      description: 'Short stories of puzzling cases and unsolved events.'
    },
    {
      id: 3,
      title: 'Creative Minds',
      creator: 'Kenji Sato',
      status: false,
      premium: true,
      makeDefault: false,
      visible: true,
      imageUrl: '../images/podcast-img-5.png',
      duration: '49:58',
      description: 'Inspiring chats with artists, makers, and innovators.'
    }
  ];

  private load(): Podcast[] {
    let data = localStorage.getItem(this.storageKey);

    if (data) {
      return JSON.parse(data);
    } else {
      this.saveAll(this.defaultPodcasts);
      localStorage.setItem(this.idKey, (this.defaultPodcasts.length + 1).toString());
      return [...this.defaultPodcasts];
    }
  }

  private saveAll(podcasts: Podcast[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(podcasts));
  }

  getAll(): Podcast[] {
    let saved = this.load();
    let combined = [...this.defaultPodcasts, ...saved];

    let unique = combined.filter(
      (podcast, index, self) =>
        index === self.findIndex(p => p.id === podcast.id)
    );

    return unique;
  }

  getById(id: number): Podcast | undefined {
    return this.load().find(p => p.id === id);
  }

  create(podcast: Podcast) {
    let podcasts = this.load();
    let storedId = localStorage.getItem('nextId');
    let nextId = storedId ? +storedId : 1;

    podcast.id = nextId++;
    podcasts.push(podcast);

    localStorage.setItem('podcasts', JSON.stringify(podcasts));
    localStorage.setItem('nextId', nextId.toString());
  }

  update(id: number, updatedPodcast: Podcast): void {
    let podcasts = this.load();
    let index = podcasts.findIndex(p => p.id === id);
    if (index > -1) {
      podcasts[index] = { ...updatedPodcast, id };
      this.saveAll(podcasts);
    }
  }

  delete(id: number): void {
    let podcasts = this.load().filter(p => p.id !== id);
    this.saveAll(podcasts);
  }
}
