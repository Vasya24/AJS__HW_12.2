import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    };

    sum: number = 0;

    getPrice(...items: Buyable[]) {
    
        for (let item of items) {
     this.sum += item.price
     return this.sum.toFixed(2)
    }
    
    console.log(this.sum)
}
    getDiscount(discount: number, ...items: Buyable[]) {
        for (let item of items) {
            this.sum += item.price;

           }
           this.sum -= (this.sum/100)*discount;
           
           console.log(this.sum.toFixed(2))
    }
}