export interface Product {
    name: string;
    id: number;
    price: number;
    category: 'electronics' | 'food' | 'clothing';
}
export interface cartItem {
    product: Product;
    quantity: number;
}
//# sourceMappingURL=types.d.ts.map