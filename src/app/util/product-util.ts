import { Product } from "../model/product";
import { shampooMockList } from '../../assets/mock/shampoo-mock';
import { bodyWashMockList } from '../../assets/mock/body-wash-mock';
import { hairSerumMockList } from '../../assets/mock/hair-serum-mock';
import { moisturizerMockList } from '../../assets/mock/moisturizer-mock';

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
        const product = productList.find(product => product.productId == productId);
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

    static fetchProductList(type: number): Product[] {
        let productList = [] as Product[];
        switch (type) {
          case 0:
            productList = shampooMockList;
            break;
          case 1:
            productList = moisturizerMockList;
            break;
          case 2:
            productList = hairSerumMockList;
            break;
          case 3:
            productList = bodyWashMockList;
            break;
        }
        return productList;
    }
}