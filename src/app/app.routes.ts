import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { Dashboard } from './features/dashboard/dashboard';
import { AlbumList } from './features/albums/album-list/album-list';
import { PlaylistList } from './features/playlists/playlist-list/playlist-list';
import { PodcastForm } from './features/podcasts/podcast-form/podcast-form';


export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'dashboard', component: Dashboard },
  { path: 'albums', component: AlbumList },
  { path: 'playlists', component: PlaylistList },
  { path: 'podcasts/create', component: PodcastForm },
];
