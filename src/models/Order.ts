import Product from "./Product";
import Person from "./person";

class Order {
    key: String;
    client: Person;
    itens: Array<Product>[][];
    date: Date;
    


    
   

   

    constructor(key: String, client: Person, itens: Array<Product>[][], date: Date,) {
        this.key = key;
        this.client = client;
        this.itens = itens;
        this.date = date;
    
    }




}
export default Order;