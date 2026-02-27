import { CartItem, Product } from "./types";

export function addToCart (cart: CartItem[], product: Product, quantity: number): cartItem[]{

    const existingItem = cart.find(item => item.product.id === product.id)

    if (!existingItem){
        cart.push({product, quantity})
    }else{
        quantity += quantity
    }
    return cart
}
