import { addToCart } from "./cart";
import { products } from "./products";
import { CartItem } from "./types";


// console.log(products)

let cart: CartItem[] = []
console.log(addToCart(cart, products[2]!, 1));

