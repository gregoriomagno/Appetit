

import Product from "../models/Product"
import marcelPhoto from "../assets/imagePersons/marcelPhoto.svg";
import fernandaPhoto from "../assets/imagePersons/fernandaPhoto.svg";
import luizPhoto from "../assets/imagePersons/luizPhoto.svg"
import Person from "../models/person";
import PhotoCuscuz from "../assets/imageFood/food.svg";
import PhotoCuscuzCompleto from "../assets/imageFood/PhotoFoodCuscuzComp.svg";
import PhotoFoodPaoCaseiro from "../assets/imageFood/PhotoFoodPaoCaseiro.svg";
import PhotoFoodPaoComp from "../assets/imageFood/PhotoFoodPaoComp.svg";

//persons
const person1 = new Person("1", "Marcel batista", marcelPhoto);
const person2 = new Person("2", "Fernanda Siqueira", fernandaPhoto);
const person3 = new Person("3", "Luiz Oliveira", luizPhoto);
const person4 = new Person("4", "Marcos Oliveira", luizPhoto);
export const persons = [person1,person2,person3,person4];



//products 
const produto1 = new Product(1, "café", 1.5,PhotoCuscuz,"Escolha dentre as opções de massas abaixo.",["Milho","Arroz"]);
const produto2 = new Product(2, "Pão caseiro completo", 2.25,PhotoFoodPaoComp,"Escolha dentre as opções de massas abaixo.",["Milho","Arroz"]);
const produto3 = new Product(3, "Pão caseiro", 3.25,PhotoFoodPaoCaseiro,"Escolha dentre as opções de massas abaixo.",["Milho","Arroz"]);
const produto4 = new Product(4, "cuscuz simples", 2.25,PhotoCuscuz,"Escolha dentre as opções de massas abaixo.",["Milho","Arroz"]);
const produto5 = new Product(5, "cuscuz completo", 3.25,PhotoCuscuzCompleto,"Escolha dentre as opções de massas abaixo.",["Milho","Arroz"]);

export const products = [
    {
        id: 1,
        category: "Cuscuz",
        itens: [produto4,produto5]
    },
    {
        id: 2,
        category: "Pães",
        itens: [produto3,produto2]
    },
    
   
];


export const OrdersData = [
    {
        id: 1,
        client: person1,
        date: '11/05/2020',
        products: [{
            'product': produto2,
            'qnt': 1,
        }],
    },
    {
        id: 2,
        client: person2,
        date: '11/05/2020',
        products: [{
            'product': produto2,
            'qnt': 1,
        }],
    },
    {
        id: 3,
        client: person3,
        date: '12/05/2020',
        products: [{
            'product': produto3,
            'qnt': 1,
        },{
            'product': produto2,
            'qnt': 1,
        }],
    },

]