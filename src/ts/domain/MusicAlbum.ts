import Buyable from './Buyable';

class MusicAlbum implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly author: string,
        readonly price: number,
    ) { }
}

export { MusicAlbum }