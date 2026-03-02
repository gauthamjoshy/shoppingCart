import { addToCart, calculateTotal } from "./cart";
import { products } from "./products";
import { CartItem } from "./types";


// console.log(products)

// Add to cart

let cart: CartItem[] = []
// console.log(addToCart(cart, products[2]!, 1));
addToCart(cart, products[2]!, 1)

addToCart(cart, products[0]!, 1)
console.log(cart);

// calculate total
console.log("The toatal price of all items in the cart is",calculateTotal(cart));

// apply discount
