import { MusicAlbum } from '../ts/domain/MusicAlbum';
import Cart from '../ts/service/Cart'

test('Basic test', () => {
    let MoP = new MusicAlbum(1, 'Master Of Puppets', 'Metallica', 13)
    let cart = new Cart();
    cart.add(MoP);
    expect(cart.items.length).toBe(1)
})