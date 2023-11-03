import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Filmroot } from 'src/app/model/film-detail-interface';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-info-film',
  templateUrl: './info-film.component.html',
  styleUrls: ['./info-film.component.css']
})
export class InfoFilmComponent implements OnInit {

  id!: number;
  route: ActivatedRoute = Inject(ActivatedRoute);
  film!: Filmroot;

  constructor(private filmDetail: FilmService) {
    this.id = this.route.snapshot.params['id'];


  }

  ngOnInit(): void {
    this.filmDetail.findById(this.id).subscribe(resp => {
      this.film = resp;
    })
  }

}
