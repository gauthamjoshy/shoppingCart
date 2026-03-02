"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToCart = addToCart;
exports.calculateTotal = calculateTotal;
exports.applyDiscount = applyDiscount;
// add to cart
function addToCart(cart, product, quantity) {
    const existingItem = cart.find(item => item.product.id === product.id);
    if (!existingItem) {
        cart.push({ product, quantity });
    }
    else {
        existingItem.quantity += quantity;
    }
    return cart;
}
// calculate total
function calculateTotal(cart) {
    let total = cart.reduce((acc, curr) => {
        return acc + (curr.product.price * curr.quantity);
    }, 0);
    return total;
}
// apply discount
function applyDiscount(total, discountPercentage) {
    let dPrice = total - (total * discountPercentage) / 100;
    return dPrice;
}
//# sourceMappingURL=cart.js.map