import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService, Album } from '../services/albums.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  template: `
    <div *ngIf="album">
      <h1>Album Details</h1>
      <p><strong>Title:</strong> {{ album.title }}</p>

      <!-- Edit Album Title -->
      <div>
        <label for="albumTitle">Edit Title:</label>
        <input id="albumTitle" [(ngModel)]="album.title" />
        <button (click)="save()">Save</button>
      </div>

      <!-- Buttons -->
      <button (click)="goBack()">Back</button>
      <button (click)="goToPhotos()">Photos</button>
    </div>

    <div *ngIf="!album">
      <p>Loading album details...</p>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
  providers: [AlbumsService]
})
export class AlbumDetailComponent implements OnInit {
  album: Album | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.loadAlbum(id);
  }

  loadAlbum(id: number): void {
    this.albumsService.getAlbumById(id).subscribe({
      next: (album) => {
        this.album = album;
      },
      error: (err) => {
        console.error('Failed to load album', err);
      }
    });
  }

  save(): void {
    if (this.album) {
      console.log('Updated Title:', this.album.title); // Log the updated title
      this.albumsService.updateAlbumTitle(this.album.id, this.album.title).subscribe({
        next: () => {
          alert('Album title updated successfully!');
          this.router.navigate(['/albums']); // Navigate back to the Albums page
        },
        error: (err) => {
          console.error('Failed to update album title', err);
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }

  goToPhotos(): void {
    if (this.album) {
      this.router.navigate(['/albums', this.album.id, 'photos']);
    }
  }
}