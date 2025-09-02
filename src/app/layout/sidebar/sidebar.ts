import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [NgIf],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  showCard: boolean = true;

  dismissCard() {
    this.showCard = false;
  
  }
}
