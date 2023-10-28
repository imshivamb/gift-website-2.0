export interface Billboard {
    id: string,
    label: string,
    imageUrl: string
}

export interface Category {
    id: string,
    name: string,
    description: string,
    billboard: Billboard
}

export interface Product {
    id: string,
    name: string,
    description: string,
    price: string,
    category: Category,
    affiliateLink: string,
    images: Image[]
}

export interface Image {
    id: string,
    url: string,
}

export interface Store {
    id: string,
    name: string
}