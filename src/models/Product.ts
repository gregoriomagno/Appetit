
class Product {
    id: number;
    title: string;
    price: number;
    photo: string;
    constructor(id: number, title: string,
        price: number, photo: string) {
        this.title = title;
        this.price = price;
        this.id = id;
        this.photo = photo;
    }
} export default Product;