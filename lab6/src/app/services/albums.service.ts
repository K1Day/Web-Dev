import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Album {
  userId: number;
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';
  private albums: Album[] = [];

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  // Load albums from local storage
  private loadFromLocalStorage(): void {
    const storedAlbums = localStorage.getItem('albums');
    if (storedAlbums) {
      this.albums = JSON.parse(storedAlbums);
    }
  }

  // Save albums to local storage
  private saveToLocalStorage(): void {
    localStorage.setItem('albums', JSON.stringify(this.albums));
  }

  getAlbums(): Observable<Album[]> {
    if (this.albums.length > 0) {
      return of(this.albums);
    } else {
      return this.http.get<Album[]>(this.apiUrl).pipe(
        tap((albums) => {
          this.albums = albums;
          this.saveToLocalStorage();
        })
      );
    }
  }

  getAlbumById(id: number): Observable<Album> {
    const album = this.albums.find((a) => a.id === id);
    return album ? of(album) : this.http.get<Album>(`${this.apiUrl}/${id}`);
  }

  updateAlbumTitle(id: number, title: string): Observable<Album> {
    const album = this.albums.find((a) => a.id === id);
    if (album) {
      album.title = title;
      this.saveToLocalStorage();
    }
    return this.http.put<Album>(`${this.apiUrl}/${id}`, { title });
  }

  deleteAlbum(id: number): Observable<void> {
    this.albums = this.albums.filter((album) => album.id !== id);
    this.saveToLocalStorage();
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getAlbumPhotos(albumId: number): Observable<any[]> {
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
  }
}