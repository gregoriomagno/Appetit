

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
        date: '11/05/2019',
        total: 10.50,
        Orders: [{
            client: person1,
            status: "open",
            
            products: [{
                'product': produto1,
                'amount': 3,
            }, {
                'product': produto2,
                'amount': 3,
            },
            ],
        },
    ]},
        {
            id: 2,
            date: '12/05/2019',
            total: 4.5,
            Orders: [{
                client: person2,
                status: "open",
                products: [{
                    'product': produto1,
                    'amount': 3,
                }, 
                ],
            },{
                client: person1,
                status: "open",
                
                products: [{
                    'product': produto1,
                    'amount': 3,
                }, {
                    'product': produto2,
                    'amount': 3,
                },
                ],
            },
        ]},
       

    
   
]