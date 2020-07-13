import { MusicsService } from './musics.service';
import { Component, OnInit } from '@angular/core';
import { Musics } from './musics.model';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.page.html',
  styleUrls: ['./musics.page.scss'],
})
export class MusicsPage implements OnInit {

  loadedMusics: Musics[] = [];

  constructor(private musicsService: MusicsService) { }

  ngOnInit() {
    this.loadedMusics = this.musicsService.getAllMusics();
  }

  

}
