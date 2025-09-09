import { Injectable } from '@angular/core';
import { Podcast } from './podcast.model';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {
  private storageKey = 'podcasts';

  private load(): Podcast[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  private saveAll(podcasts: Podcast[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(podcasts));
  }

  private getNextId(podcasts: Podcast[]): number {
    if (podcasts.length === 0) return 1;
    return Math.max(...podcasts.map(p => p.id)) + 1;
  }

  getAll(): Podcast[] {
    const data = localStorage.getItem(this.storageKey);
  return data ? JSON.parse(data) : [];
  }

  getById(id: number): Podcast | undefined {
    return this.load().find(p => p.id === id);
  }

  create(podcast: Podcast) {
    const podcasts = this.load();
    const storedId = localStorage.getItem('nextId');
    let nextId = storedId ? +storedId : 1;
  
    podcast.id = nextId++;
    podcasts.push(podcast);
  
    localStorage.setItem('podcasts', JSON.stringify(podcasts));
  localStorage.setItem('nextId', nextId.toString());
  }

  // private loadNextId(): number {
  //   const storedId = localStorage.getItem('nextId');
  //   return storedId ? +storedId : 1;
  // }
  
  // private saveNextId(id: number): void {
  //   localStorage.setItem('nextId', id.toString());
  // }

  update(id: number, updatedPodcast: Podcast): void {
    const podcasts = this.load();
    const index = podcasts.findIndex(p => p.id === id);
    if (index > -1) {
      podcasts[index] = { ...updatedPodcast, id };
      this.saveAll(podcasts);
    }
  }

  delete(id: number): void {
    const podcasts = this.load().filter(p => p.id !== id);
    this.saveAll(podcasts);
  }
}
