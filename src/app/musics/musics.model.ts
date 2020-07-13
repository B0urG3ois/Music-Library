import { Songs } from './songs.model';
export class Musics {
    constructor(
        public id: string,
        public name: string,
        public artist: string,
        public imgUrl: string,
        public songs: Songs[]
    ) {}
}