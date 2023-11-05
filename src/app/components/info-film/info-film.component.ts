
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Filmroot } from 'src/app/model/film-detail-interface';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-info-film',
  templateUrl: './info-film.component.html',
  styleUrls: ['./info-film.component.css']
})
export class InfoFilmComponent implements OnInit {

  id!: number;
  film!: Filmroot;

  constructor(private route: ActivatedRoute, private filmDetail: FilmService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.params['id']);
    this.filmDetail.findById(this.id).subscribe(resp => {
      this.film = resp;
    });
  }

  getImg() {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${this.film.poster_path}`;
  }

}