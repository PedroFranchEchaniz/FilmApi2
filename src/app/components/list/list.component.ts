import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/model/film-list-interface';
import { FilmService } from 'src/app/service/film.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  filmList: Film[] = [];

  page = 1;

  constructor(private filmService: FilmService, private router: Router) { }

  ngOnInit(): void {
    this.filmService.getFilmList().subscribe(resp => {
      this.filmList = resp.results;
    })
  }

  paginar() {
    this.filmService.getPag(this.page).subscribe(resp => {
      this.filmList = resp.results;
    })
  }

  abrirDetalle(film: Film){
    this.router.navigate(['/detalle', film.id])
  }
}
