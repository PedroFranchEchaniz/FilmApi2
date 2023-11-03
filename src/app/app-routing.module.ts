import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { InfoFilmComponent } from './components/info-film/info-film.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'detalle/:id', component: InfoFilmComponent },
  { path: '', component: ListComponent },
  { path: '**', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
