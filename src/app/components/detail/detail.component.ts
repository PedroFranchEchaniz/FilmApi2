import { Component, Input } from '@angular/core';
import { Film } from 'src/app/model/film-list-interface';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  @Input() film!: Film;

  getImg() {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${this.film.poster_path}`;
  }

  
}
