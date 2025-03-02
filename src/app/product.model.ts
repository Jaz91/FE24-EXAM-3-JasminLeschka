export interface Product {
    id: number,
    name: string,
    description: string,
    category: string,
    img: string,
    price: number,
    rating: number,
    availability: boolean,
}

export interface CartItem extends Product {
    quantity: number,
}