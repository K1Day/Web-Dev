import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../services/albums.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-album-photos',
  template: `
    <h1>Photos for Album {{ albumId }}</h1>
    <div *ngIf="photos.length > 0">
      <div *ngFor="let photo of photos" class="photo-container">
        <img [src]="photo.thumbnailUrl" [alt]="photo.title" />
        <p>{{ photo.title }}</p>
      </div>
    </div>
    <div *ngIf="photos.length === 0">
      <p>No photos found for this album.</p>
    </div>
    <button (click)="goBack()">Return</button>
  `,
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  providers: [AlbumsService]
})
export class AlbumPhotosComponent implements OnInit {
  photos: any[] = [];
  albumId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    this.albumId = +this.route.snapshot.paramMap.get('id')!;
    this.loadPhotos();
  }

  loadPhotos(): void {
    if (this.albumId) {
      this.albumsService.getAlbumPhotos(this.albumId).subscribe({
        next: (photos) => {
          this.photos = photos;
        },
        error: (err) => {
          console.error('Failed to load photos', err);
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}