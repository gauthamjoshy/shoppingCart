import { CartItem, Product } from "./types";

// add to cart
export function addToCart (cart: CartItem[], product: Product, quantity: number): CartItem[]{

    const existingItem = cart.find(item => item.product.id === product.id)

    if (!existingItem){
        cart.push({product, quantity})
    }else{
        existingItem.quantity += quantity
    }
    return cart
}
