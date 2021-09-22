
import Person from "./person";

class Order {
    key: String;
    client: Person;
    date: Date;
    status: String;
    itens: Array<any>[];
    

    constructor(item: any) {
    
        this.key = item.id;
        this.client = item.client;
        this.itens =item.products;
        this.date = item.date;
        this.status = item.status;

        

    }

     getDescription() {
        var textDescription = "";
       
        this.itens.forEach(function (item) {
            var title;
            var qnt;
            for (var chave in item) {
                if (chave === 'product') {
                    title = item[chave].title;
                } else {
                    qnt = item[chave];
                }
            }
            if (qnt !== 1) {
                textDescription += qnt + "x ";
            }
            textDescription += title + ",";

        })

        return textDescription.substring(0, textDescription.length - 1) + ".";
    }
     getTotal(){
        var total=0;
        console.log("getTotal: "+ this.itens);
        this.itens.forEach(function (item) {
            var price;
            var qnt;
            for (var chave in item) {
                if (chave === 'product') {
                    price = item[chave].price;
                } else {
                    qnt = item[chave];
                }
            }
            total+=price*qnt;

        })

        return total;
      }

      




}
export default Order;