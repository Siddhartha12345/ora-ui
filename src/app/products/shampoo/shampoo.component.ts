import { Component } from '@angular/core';
import { Product } from '../../model/product';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-shampoo',
  standalone: true,
  imports: [CommonModule, StarRatingComponent],
  templateUrl: './shampoo.component.html',
  styleUrl: './shampoo.component.css'
})
export class ShampooComponent {

  shampooList: Product[] = [
    {
      productId: 'aksfhalkhfavb',
      productName: 'Ravel Anti-Dandruff Shampoo',
      productImage: 'https://www.ravelcare.com/cdn/shop/files/7_cf51f175-8cb4-442f-aba3-1afb0044c5f7_300x300.png',
      productAvgRating: 4.0,
      productTotalRating: 140,
      productPrice: 549
    },
    {
      productId: 'ewihgewbmsbs',
      productName: 'Head & Shoulders',
      productImage: 'https://m.media-amazon.com/images/I/71LKDyCezrL._AC_UF1000,1000_QL80_.jpg',
      productAvgRating: 4.2,
      productTotalRating: 891,
      productPrice: 250
    },
    {
      productId: 'wgjwohrlnhs.mnfdh',
      productName: 'Herbal Essences Shampoo',
      productImage: 'https://storage.googleapis.com/images-cub-prd-9400d55.cub.prd.v8.commerce.mi9cloud.com/product-images/detail/be3b39dc-d28e-46a3-ab51-8d1dc73633b0.jpeg',
      productAvgRating: 3.8,
      productTotalRating: 112,
      productPrice: 199
    },
    {
      productId: 'eqigheihglkbva',
      productName: 'Tresemme Keratin Smooth Shampoo',
      productImage: 'https://cdn2.thebridalbox.com/wp-content/uploads/2024/08/15-Best-TRESemme-Shampoos-To-Buy-In-2018.jpg',
      productAvgRating: 4.5,
      productTotalRating: 298,
      productPrice: 699
    },
    {
      productId: 'grhjrojhojhseg',
      productName: "L'Oreal Professional Shampoo",
      productImage: 'https://cdn11.bigcommerce.com/s-c8f9a/images/stencil/500x659/products/1552/4745/Loreal_SE_SCPAVD-Dermo_Regulator_300__22167.1696805144.jpg',
      productAvgRating: 4.8,
      productTotalRating: 751,
      productPrice: 899
    },
    {
      productId: 'jett94uthwihti3',
      productName: 'Garnier Ultra Doux Shampoo',
      productImage: 'https://cdn1.dumyah.com/image/cache/data/2021/09/16313653772007668946-800x800.jpg',
      productAvgRating: 2.8,
      productTotalRating: 37,
      productPrice: 265
    },
    {
      productId: 'egoeghewkngwnmd',
      productName: 'Vanalaya Biotin & Collagen Shampoo',
      productImage: 'https://cdn.onegreen.in/wp-content/uploads/2020/09/02170442/BIOTIN-COLLAGEN-SHAMPOO-1-1-600x800.jpg',
      productAvgRating: 3.2,
      productTotalRating: 348,
      productPrice: 659
    },
    {
      productId: 'ehieghandqdnv',
      productName: 'Himalaya Anti-Hairfall Shampoo',
      productImage: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/c/b/cb6f6188901138843861_1.jpg',
      productAvgRating: 2.7,
      productTotalRating: 380,
      productPrice: 199
    },
    {
      productId: 'bkkfdkbnsjegogj',
      productName: 'Pink Root Milk Protein Shampoo',
      productImage: 'https://www.pinkroot.in/cdn/shop/products/milk-protein-shampoo-250ml-pink-root-1.jpg',
      productAvgRating: 4.7,
      productTotalRating: 500,
      productPrice: 975
    },
    {
      productId: 'hipgeheodwddbsk',
      productName: 'WOW Onion Shampoo',
      productImage: 'https://media6.ppl-media.com/mediafiles/blogs/wow_skin_science_onion_black_seed_oil_shampoo_300_ml_5_display_1631767695_88346ae8_c302c4c3e0.jpg',
      productAvgRating: 2.5,
      productTotalRating: 658,
      productPrice: 449
    },
    {
      productId: 'e3tieeig3hiegegbs',
      productName: 'Cosmo Professional Damage Care Shampoo',
      productImage: 'https://cosmoprofessional.ae/cdn/shop/products/keratin-SHAMPOO-W-BOX.jpg',
      productAvgRating: 2.5,
      productTotalRating: 658,
      productPrice: 449
    },
    {
      productId: '2ru1opjoo33hfn',
      productName: 'HiP Botanical Shampoo',
      productImage: 'https://hdfragrances.com/storage/2024/07/HIP-CHALETS.jpg',
      productAvgRating: 3.7,
      productTotalRating: 287,
      productPrice: 949
    },
    {
      productId: 'hieowehsdkbKBVKSDLA',
      productName: 'Dandymen 3-In-1 Wash Shampoo',
      productImage: 'https://www.dandymencollection.com/cdn/shop/files/3in1.jpg',
      productAvgRating: 4.6,
      productTotalRating: 125,
      productPrice: 1049
    }
  ];
}
