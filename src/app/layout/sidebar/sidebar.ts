import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class Sidebar {
  @Output() closeSidebar = new EventEmitter<void>();
  @Input() open: boolean = false;
  showCard: boolean = true;

  dismissCard() {
    this.showCard = false;
  }
}
