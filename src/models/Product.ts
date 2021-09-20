
class Product {
    id: number;
    title: string;
    price: number;
    photo: string;
    titleOptions: string;
    options : Array<string>; 
    constructor(id: number, title: string,
        price: number, photo: string, titleOptions: string ,options: Array<string>) {
        this.title = title;
        this.price = price;
        this.id = id;
        this.photo = photo;
        this.options = options;
        this.titleOptions = titleOptions;
    }
} export default Product;