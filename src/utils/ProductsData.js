import Product from "../models/Product"
//products 
const produto1 = new Product(1, "café", 1.5);
const produto2 = new Product(2, "café com leite", 2);
const produto3 = new Product(3, "Pão caseiro", 3.25);

export const products = [{
    id:1,
    category: "Pães",
    itens : [produto3]
}];
