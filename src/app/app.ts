import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { Sidebar } from './layout/sidebar/sidebar';
import { Navbar } from "./layout/navbar/navbar";
import { MusicControl } from "./layout/music-control/music-control";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Sidebar, CommonModule, Navbar, MusicControl],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  showSidebar = true;
  flexDirection = 'row';
  isMobileScreen: boolean = window.innerWidth <= 768;
  showMusicControl = false;
  hideNavbar = false;

  constructor(private router: Router) {
    this.updateSidebarState(window.innerWidth);
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      let url = event.urlAfterRedirects;

      let isAuthPage = url.startsWith('/login') || url.startsWith('/register');
      this.hideNavbar = isAuthPage;
      this.showSidebar = !isAuthPage;

      this.updateSidebarState(window.innerWidth, isAuthPage);

      let routesWithMusic = ['/dashboard', '/playlists', '/albums', '/podcasts'];
      this.showMusicControl = routesWithMusic.includes(url);
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateSidebarState(event.target.innerWidth);
  }

  updateSidebarState(width: number, hideSidebar: boolean = false) {
    this.isMobileScreen = width <= 768;

    if (!this.isMobileScreen && !hideSidebar) {
      this.showSidebar = true;
    }

    if (this.isMobileScreen && !hideSidebar) {
      this.showSidebar = false;
    }

    if (hideSidebar) {
      this.showSidebar = false;
    }

    this.flexDirection = this.showSidebar ? 'row' : 'column';
  }


  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  isMobile(): boolean {
    return this.isMobileScreen;
  }
}