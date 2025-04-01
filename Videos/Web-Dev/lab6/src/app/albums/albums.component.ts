import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumsService, Album } from '../services/albums.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-albums',
  template: `
    <h1>Albums</h1>
    <div *ngIf="isLoading">Loading...</div>
    <div *ngIf="!isLoading">
      <ul>
        <li *ngFor="let album of albums" (click)="onSelect(album.id)">
          {{ album.title }}
          <button (click)="deleteAlbum(album.id); $event.stopPropagation()">Delete</button>
        </li>
      </ul>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  providers: [AlbumsService]
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  isLoading: boolean = true;

  constructor(private albumsService: AlbumsService, private router: Router) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.albumsService.getAlbums().subscribe({
      next: (albums) => {
        this.albums = albums;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load albums', err);
        this.isLoading = false;
      }
    });
  }

  onSelect(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number): void {
    if (confirm('Are you sure you want to delete this album?')) {
      this.albumsService.deleteAlbum(id).subscribe({
        next: () => {
          this.albums = this.albums.filter(album => album.id !== id);
          console.log('Updated albums:', this.albums); // Log the updated array
        },
        error: (err) => {
          console.error('Failed to delete album', err);
        }
      });
    }
  }
}