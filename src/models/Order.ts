
import Person from "./person";

class Order {
    key: String;
    client: Person;
    date: Date;
    status: String;
    // total: number;
    itens: Array<any>[];


    constructor(item: any) {
    
        this.key = item.id;
        this.client =item.client;
        this.itens =item.products;
        this.date = item.date;
        // this.total = total;
        this.status = item.status;
    }

    getDescription() {
        var textDescription = "";
        this.itens.forEach(function (item) {
            var title;
            var amount;
            for (var chave in item) {
                if (chave === 'product') {
                    title = item[chave].title;
                } else {
                    amount = item[chave];
                }
            }
            if (amount !== 1) {
                textDescription += amount + "X ";
            }
            textDescription += title + ",";

        })

        return textDescription.substring(0, textDescription.length - 1) + ".";
    }
     getTotal(){
        var total=0;
        this.itens.forEach(function (item) {
            var price;
            var amount;
            for (var chave in item) {
                if (chave === 'product') {
                    price = item[chave].price;
                } else {
                    amount = item[chave];
                }
            }
            total+=price*amount;

        })

        return total;
      }




}
export default Order;