const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';

export type UpdateProductsAction = {
    type: typeof UPDATE_PRODUCTS,
    payload: Product[]
}

export interface Product {
    _id: string,
    category: string,
    subcategory?: string,
    name: string,
    sellValue: string,
    pcsAvailable: number,
    boughtValue?: string,
    manufacture?: string,
    description?: string,
    additionalInformation?: string
}

export type ActionType = UpdateProductsAction