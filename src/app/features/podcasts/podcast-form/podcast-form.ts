import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Navbar } from "../../../layout/navbar/navbar";
import { Podcast } from '../podcast.model';
import { PodcastService } from '../podcast';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-podcast-form',
  standalone: true,
  imports: [Navbar, FormsModule, CommonModule],
  templateUrl: './podcast-form.html',
  styleUrls: ['./podcast-form.scss']
})
export class PodcastForm implements OnInit {
  podcast: Podcast = {
    id: 0,
    title: '',
    descriptionLink: '',
    description: '',
    status: false,
    premium: false,
    makeDefault: false,
    visible: false,
    imageUrl: ''
  };

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  
  isDragOver = false;
  isEdit = false;
  selectedFile: File | null = null;

  constructor(
    private podcastService: PodcastService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      const existingPodcast = this.podcastService.getById(+idParam);
      if (existingPodcast) {
        this.podcast = { ...existingPodcast };
        this.isEdit = true;
      }
    }

    const savedImage = localStorage.getItem('podcastImage');
    if (savedImage && !this.podcast.imageUrl) {
      this.podcast.imageUrl = savedImage;
    }
  }

  save() {
    if (this.isEdit) {
      this.podcastService.update(this.podcast.id, this.podcast);
    } else {
      this.podcastService.create(this.podcast);
    }
    this.router.navigate(['/podcasts']);
  }

  cancel() {
    this.router.navigate(['/podcasts']);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;

    if (event.dataTransfer?.files?.length) {
      this.handleFile(event.dataTransfer.files[0]);
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.handleFile(input.files[0]);
    }
  }

  private handleFile(file: File) {
    this.selectedFile = file;

    const reader = new FileReader();
    reader.onload = () => {
      this.podcast.imageUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  triggerFileInput() {
        this.fileInput.nativeElement.click();
      }

  uploadImage() {
    if (!this.selectedFile) return;

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      this.podcast.imageUrl = base64;
      localStorage.setItem('podcastImage', base64);
    };
    reader.readAsDataURL(this.selectedFile);
  }
}
