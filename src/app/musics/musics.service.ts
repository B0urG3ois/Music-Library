import { FavService } from './../favs/fav.service';
import { Injectable } from '@angular/core';
import { Musics } from './musics.model';

@Injectable({
  providedIn: 'root'
})
export class MusicsService {

  private musics: Musics[] = [
    {
      id: 'a1',
      name: 'Welcome to the Black Parade',
      artist: 'My Chemical Romance',
      imgUrl: 'https://i.ibb.co/2vMvvNP/Screen-Shot-2019-09-23-at-13-06-40-PM.png',
      songs: [
        {
          id: 'a1s1',
          title: 'I Don\'t Love You',
          minute: 3,
          second: 59,
          status: 0,
        },
        {
          id: 'a1s2',
          title: 'Teenagers',
          minute: 2,
          second: 42,
          status: 0,
        },
        {
          id: 'a1s3',
          title: 'Welcome to The Black Parade',
          minute: 5,
          second: 1,
          status: 0,
        },
        {
          id: 'a1s4',
          title: 'This is How I Dissapear',
          minute: 3,
          second: 59,
          status: 0,
        },
        {
          id: 'a1s5',
          title: 'House of Wolves',
          minute: 3,
          second: 59,
          status: 0,
        }
      ]
    },
    {
      id: 'a2',
      name: 'Love Me / Love Me Not',
      artist: 'HONNE',
      imgUrl: 'https://i.ibb.co/stR16bb/Screen-Shot-2019-09-23-at-13-06-57-PM.png',
      songs: [
        {
          id: 'a2s1',
          title: 'I Might',
          minute: 4,
          second: 16,
          status: 0,
        },
        {
          id: 'a2s2',
          title: 'Me & You',
          minute: 4,
          second: 4,
          status: 0,
        },
        {
          id: 'a2s3',
          title: 'Day 1',
          minute: 3,
          second: 54,
          status: 0,
        },
        {
          id: 'a2s4',
          title: 'I Got You',
          minute: 3,
          second: 32,
          status: 0,
        }
      ]
    },
    {
      id: 'a3',
      name: 'Pejantan Tangguh',
      artist: 'Sheila on 7',
      imgUrl: 'https://i.ibb.co/QQ6MP8J/Screen-Shot-2019-09-23-at-13-06-25-PM.png',
      songs: [
        {
          id: 'a3s1',
          title: 'Pejantan Tangguh',
          minute: 3,
          second: 27,
          status: 0,
        },
        {
          id: 'a3s2',
          title: 'Itu Aku',
          minute: 4,
          second: 39,
          status: 0,
        },
        {
          id: 'a3s3',
          title: 'Pemuja Rahasia',
          minute: 3,
          second: 53,
          status: 0,
        },
        {
          id: 'a3s4',
          title: 'Pilihlah Aku',
          minute: 4,
          second: 22,
          status: 0,
        },
        {
          id: 'a3s5',
          title: 'Generasi Patah Hati',
          minute: 5,
          second: 6,
          status: 0,
        },
        {
          id: 'a3s6',
          title: 'Ketidakwarasan Padaku',
          minute: 3,
          second: 53,
          status: 0,
        }
      ]
    }
  ]

  constructor(private favSvc: FavService) { }

  getAllMusics() {
    return [...this.musics];
  }

  getMusic(musicsId: string) {
    return {
      ...this.musics.find(musics => {
        return musics.id === musicsId;
      })
    };
  }

  changeStatus(id: string, idMusic: string, title: string, minute: number, second: number){
    const idxMusic = this.musics.findIndex(music => music.id === idMusic);
    const idxSong = this.musics[idxMusic].songs.findIndex(song => song.id === id);

    if (this.musics[idxMusic].songs[idxSong].status == 1) {
      this.musics[idxMusic].songs[idxSong].status = 0;
      this.favSvc.addFav(id, title, minute, second);
    } else {
      this.musics[idxMusic].songs[idxSong].status = 1;
      this.favSvc.delFav(id);
    }
  }
}
