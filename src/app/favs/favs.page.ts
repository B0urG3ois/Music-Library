import { FavService } from './fav.service';
import { Fav } from './fav.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.page.html',
  styleUrls: ['./favs.page.scss'],
})
export class FavsPage implements OnInit {

  favSong: Fav[] = [];

  constructor(private favService: FavService) { }

  ngOnInit() {
    this.favSong = this.favService.allFavs();
  }

}
