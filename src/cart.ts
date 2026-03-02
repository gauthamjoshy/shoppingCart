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

// calculate total
export function calculateTotal (cart: CartItem[]): number{
    let total = cart.reduce((acc, curr)=>{
        return acc + (curr.product.price * curr.quantity)
    }, 0)
    return total
}

// apply discount
export function applyDiscount (total: number, discountPercentage: number): number{
    let dPrice = total - (total * discountPercentage) / 100
    return dPrice
}

//  find items by category
export function findItemsByCategory (cart: CartItem[], category:string): CartItem[]{
    let filteredItems = cart.filter(item => item.product.category === category)
    return filteredItems
}