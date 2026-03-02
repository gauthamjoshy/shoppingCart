export interface Product {
    name: string;
    id: number;
    price: number;
    category: 'electronics' | 'food' | 'clothing';
}
export interface CartItem {
    product: Product;
    quantity: number;
}
//# sourceMappingURL=types.d.ts.map