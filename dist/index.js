"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cart_1 = require("./cart");
const products_1 = require("./products");
// console.log(products)
let cart = [];
// console.log(addToCart(cart, products[2]!, 1));
(0, cart_1.addToCart)(cart, products_1.products[2], 1);
(0, cart_1.addToCart)(cart, products_1.products[0], 3);
console.log(cart);
//# sourceMappingURL=index.js.map