import Cart from './service/Cart';
import { MusicAlbum } from './domain/MusicAlbum';

const rip = new MusicAlbum(1, 'Rust In Peace', 'Megadeth', 15);
const rib = new MusicAlbum(2, 'Reign In Blood', 'Slayer', 13);
const ajfa = new MusicAlbum(3, '...And Justice For All', 'Metallica', 10);
const atl = new MusicAlbum(4, 'Among The Living', 'Anthrax', 9)

const cart = new Cart();

cart.add(rip);
cart.add(rib);
cart.add(ajfa);
cart.add(atl);
cart.getPrice(rip, rib, ajfa, atl)


const nemdiv = new MusicAlbum(5, 'Nemesis Divina', 'Satyricon', 16);
const tranhung = new MusicAlbum(6, 'Transilvanian Hunger', 'Darkthrone', 19);
const demigod = new MusicAlbum(7, 'Demigod', 'Behemoth', 16.5);
const dmds = new MusicAlbum(8, 'De Misteriis Dom Sathanas', 'Mayhem', 14.99)
const secondCart = new Cart();
secondCart.add(nemdiv);
secondCart.add(tranhung);
secondCart.add(demigod);
secondCart.add(dmds)
secondCart.getDiscount(15, nemdiv, tranhung, demigod, dmds)

export { cart, secondCart }