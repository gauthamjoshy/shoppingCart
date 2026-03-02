"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cart_1 = require("./cart");
const products_1 = require("./products");
// console.log(products)
// Add to cart
let cart = [];
// console.log(addToCart(cart, products[2]!, 1));
(0, cart_1.addToCart)(cart, products_1.products[2], 1);
(0, cart_1.addToCart)(cart, products_1.products[0], 1);
console.log(cart);
// calculate total
console.log("The toatal price of all items in the cart is", (0, cart_1.calculateTotal)(cart));
// apply discount
let total = (0, cart_1.calculateTotal)(cart);
console.log("The price after discount is", (0, cart_1.applyDiscount)(total, 10));
// filteritems by category
console.log("The filtered items are", (0, cart_1.findItemsByCategory)(cart, "electronics"));
//# sourceMappingURL=index.js.map