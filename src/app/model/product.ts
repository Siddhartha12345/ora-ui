import { ProductType } from "../constant/product-enum";

export interface Product {
    productId: string,
    productName: string,
    productImage: string,
    productAvgRating: number,
    productTotalRating: number,
    productPrice: number,
    isBookmarked: boolean,   // this field will not be a property of products db but will be coming from user cart db 
    isAddedToCart: boolean,  // this field will not be a property of products db but will be coming from user cart db
    productType: ProductType
}