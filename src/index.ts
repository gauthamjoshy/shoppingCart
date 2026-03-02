import { addToCart, applyDiscount, calculateTotal, findItemsByCategory } from "./cart";
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
let total: number = calculateTotal(cart)
console.log("The price after discount is", applyDiscount(total, 10));

// filteritems by category
console.log("The filtered items are", findItemsByCategory(cart, "electronics"));
