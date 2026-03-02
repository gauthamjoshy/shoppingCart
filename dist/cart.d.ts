import { CartItem, Product } from "./types";
export declare function addToCart(cart: CartItem[], product: Product, quantity: number): CartItem[];
export declare function calculateTotal(cart: CartItem[]): number;
export declare function applyDiscount(total: number, discountPercentage: number): number;
export declare function findItemsByCategory(cart: CartItem[], category: string): CartItem[];
//# sourceMappingURL=cart.d.ts.map