import { TestBed } from '@angular/core/testing';
import { PodcastService } from './podcast';

describe('Podcast', () => {
  let service: PodcastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PodcastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
