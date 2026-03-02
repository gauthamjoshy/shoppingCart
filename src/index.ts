import { addToCart } from "./cart";
import { products } from "./products";
import { CartItem } from "./types";


// console.log(products)

// Add to cart

let cart: CartItem[] = []
// console.log(addToCart(cart, products[2]!, 1));
addToCart(cart, products[2]!, 1)

addToCart(cart, products[0]!, 3)
console.log(cart);

