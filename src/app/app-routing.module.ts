import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'musics', pathMatch: 'full' },

  { 
    path: 'musics',
    children: [
      {
        path: '',
        loadChildren: './musics/musics.module#MusicsPageModule'
      },
      {
        path: ':musicsId',
        loadChildren: './musics/music-detail/music-detail.module#MusicDetailPageModule'
      }
    ]
  },

  { path: 'favs', loadChildren: './favs/favs.module#FavsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
