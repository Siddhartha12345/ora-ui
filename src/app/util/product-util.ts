import { Product } from "../model/product";

export class ProductUtil {
    static toggleBookmark(productList: Product[], productId: string): void {
        const product = productList.find(product => product.productId == productId);
        if(product) {
            product.isBookmarked = !product.isBookmarked;
        } else {
            throw new Error(`Product with productId ${productId} not found`);
        }
    }

    static addToCart(productList: Product[], productId: string): void {
        const product =productList.find(product => product.productId == productId);
        if(product) {
            product.isAddedToCart = !product.isAddedToCart;
        } else {
            throw new Error(`Product with productId ${productId} not found`);
        }
        if(product.isAddedToCart) {
            console.log('Called api to add to cart');
        } else {
            console.log('Called api to remove from cart');
        }
    }
}