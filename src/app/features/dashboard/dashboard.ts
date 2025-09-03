import { Component } from '@angular/core';
import { Sidebar } from "../../layout/sidebar/sidebar";
import { Navbar } from "../../layout/navbar/navbar";
import { MusicControl } from "../../layout/music-control/music-control";

@Component({
  selector: 'app-dashboard',
  imports: [Sidebar, Navbar, MusicControl],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
