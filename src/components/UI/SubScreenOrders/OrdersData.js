
import Order from "../../../models/Order";
import Product from "../../../models/Product"
import marcelPhoto from "../../../assets/imagePersons/marcelPhoto.svg";
import fernandaPhoto from "../../../assets/imagePersons/fernandaPhoto.svg";
import luizPhoto from "../../../assets/imagePersons/luizPhoto.svg"
import Person from "../../../models/person";
 
const person1 = new Person("1","Marcel batista",marcelPhoto);
const person2 = new Person ("2","Fernanda Siqueira", fernandaPhoto);
const person3 = new Person ("3","Luiz Oliveira",luizPhoto );

const order = [ new Product("café",1.5),new Product("café",2)];
const order2 = [new Product("café",1.5), new Product("café com leite",3)];

export const OrdersData = [
    
    new Order("1",person1,order,"13/05/2019"),
    new Order("2",person2,order2,"09/05/2019"),
    new Order("3",person3,order2,"09/05/2019"),
]