import { Component } from '@angular/core';
import { Sidebar } from '../../../layout/sidebar/sidebar';
import { Navbar } from '../../../layout/navbar/navbar';
import { MusicControl } from '../../../layout/music-control/music-control';

@Component({
  selector: 'app-album-list',
  imports: [Sidebar, Navbar, MusicControl,],
  templateUrl: './album-list.html',
  styleUrl: './album-list.scss'
})
export class AlbumList {

}
