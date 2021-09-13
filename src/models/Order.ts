import Product from "./Product";
import Person from "./person";

class Order {
    key: String;
    client: Person;
    itens: Array<Product>;
    date: Date;
    price: number;
    description : String;


    setPrice(itens: Array<Product>): number {
        var total = 0 ;
        itens.forEach(function (item) {
            total+=item.price;
        });
        return total;

    }

    constructor(key: String, client: Person, itens: Array<Product>, date: Date,) {
        this.key = key;
        this.client = client;
        this.itens = itens;
        this.date = date;
        this.price = this.setPrice(itens);
        this.description = "descriçdsa";
    
    }




}
export default Order;