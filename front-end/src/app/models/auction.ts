export class Auction {
    _id: number;
    image: string;
    name: string;
    description: string;
    category: string;
    dateStart: string;
    dateEnd: string;
    price: string;

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.image = obj && obj.image || null;
        this.name = obj && obj.name || null;
        this.description = obj && obj.description || null;
        this.category = obj && obj.category || null;
        this.dateStart = obj && obj.dateStart || null;
        this.dateEnd = obj && obj.dateEnd || null;
        this.price = obj && obj.price || null;
      }
}