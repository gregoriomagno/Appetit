
import Order from "../../../models/Order";
import Product from "../../../models/Product"
import marcelPhoto from "../../../assets/imagePersons/marcelPhoto.svg";
import fernandaPhoto from "../../../assets/imagePersons/fernandaPhoto.svg";
import luizPhoto from "../../../assets/imagePersons/luizPhoto.svg"
import Person from "../../../models/person";


//persons
const person1 = new Person("1", "Marcel batista", marcelPhoto);
const person2 = new Person("2", "Fernanda Siqueira", fernandaPhoto);
const person3 = new Person("3", "Luiz Oliveira", luizPhoto);

//products 
const produto1 = new Product(1, "café", 1.5);
const produto2 = new Product(2, "café com leite", 2);


export const OrdersData = [
    {
        id: 1,
        products: [{
            product: produto1,
            amount: 3,
        },{
            product: produto2,
            amount: 3,
        },
    ],
        client: person1,
        description: "description",
        date: '13/05/2019',
        status: "open",
    },

    {
        id: 2,
        products: [{
            product: produto1,
            amount: 3,
        }],
        client: person2,
        description: "description",
        date: '13/05/2019',
        status: "open",
    },
    {
        id: 3,
        products: [{
            product: produto1,
            amount: 3,
        }],
        client: person3,
        description: "description",
        date: '13/05/2019',
        status: "open",
    },
]