import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MovieInfoComponent } from '../movie-info/movie-info.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });

  }
  getGenre(name: string, description: string): void {
    this.dialog.open(MovieInfoComponent, {
      data: {
        title: name,
        content: description,
      }
    })
  }

  /**
 * 
 * @param name 
 * @param bio 
 *  param data will be passed into the dialog when opened.
 */

  getDirector(name: string, bio: string): void {
    this.dialog.open(MovieInfoComponent, {
      data: {
        title: name,
        content: bio,
      }
    })
  }

  /**
 * 
 * @param description 
 * param data will be passed into the dialog when opened.
 */

  getSynopsis(description: string): void {
    this.dialog.open(MovieInfoComponent, {
      data: {
        title: "Synopsis",
        content: description,
      }
    })
  }


  /**
   * 
   * @param {string} id 
   * movies will be added/deleted to the users favorite movie array. 
   * isFavorite is created to check if the movie has been added. 
   */

  addFavorite(id: string): void {
    this.fetchApiData.addFavoriteMovie(id).subscribe((Response: any) => {
      this.snackBar.open('added to favorites', 'OK', {
        duration: 2000
      })
    })
  }

  isFavorite(id: string): boolean {
    return this.fetchApiData.isFavoriteMovie(id)
  }

  removeFavorite(id: string): void {
    this.fetchApiData.deleteFavoriteMovie(id).subscribe((Response: any) => {
      this.snackBar.open('removed from favorites', 'OK', {
        duration: 2000
      })
    })
  }
}
