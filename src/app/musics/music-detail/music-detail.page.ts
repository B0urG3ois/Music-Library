import { MusicsService } from './../musics.service';
import { Musics } from './../musics.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { FavService } from 'src/app/favs/fav.service';

@Component({
  selector: 'app-music-detail',
  templateUrl: './music-detail.page.html',
  styleUrls: ['./music-detail.page.scss'],
})
export class MusicDetailPage implements OnInit {

  loadedSong: Musics;

  constructor(
    private activatedRoute: ActivatedRoute,
    private musicSvc: MusicsService,
    private loadingCtrl: LoadingController,
    private favSvc: FavService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if (!paramMap.has('musicsId')) { return; }
        this.loadedSong = this.musicSvc.getMusic(paramMap.get('musicsId'));
      }
    )
  }

  favIcon: string = "heart-empty";
  toggleIcon(title: string, minute: number, second: number, status: number, id: string, idMusic: string) {
    
    this.musicSvc.changeStatus(id, idMusic, title, minute, second);
    this.loadedSong = this.musicSvc.getMusic(idMusic);

    if (status == 0) {
      this.favSvc.addFav(id, title, minute, second);
      this.loadingCtrl.create({
        keyboardClose: true,
        message: 'Updating your favorite songs...'
      })
      .then(loadingEl => {
        loadingEl.present();
        setTimeout(() => {
          loadingEl.dismiss();
        }, 2000);
      });
    } else if (status == 1) {
      this.favSvc.delFav(id);
      this.loadingCtrl.create({
        keyboardClose: true,
        message: 'Updating your favorite songs...'
      })
      .then(loadingEl => {
        loadingEl.present();
        setTimeout(() => {
          loadingEl.dismiss();
        }, 2000);
      });
    }
  }



}
