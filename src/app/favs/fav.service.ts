import { Fav } from './fav.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavService {

  private favs: Fav[] = [];
  fav: Fav;

  allFavs() {
    return [...this.favs];
  }

  addFav(id, title, minute, second) {
    this.fav = new Fav(id, title, minute, second);
    this.favs = [...this.favs, this.fav];
  }

  delFav(id: string) {
    this.favs = this.favs.filter(fav => {
      return fav.id !== id
    })
    return [...this.favs];
  }


  constructor() { }
}
