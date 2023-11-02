import { Component } from '@angular/core';
import { Film } from 'src/app/model/film-list-interface';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  filmList: Film[] = [];

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getFilmList().subscribe(resp => {
      this.filmList = resp.results;
    })
  }
}
