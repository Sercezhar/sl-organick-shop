import { cart } from './modules/cart';
import { handleInsertProducts } from './modules/handleInsertProducts';

const productsList = document.querySelector('.shop-products__list');

await handleInsertProducts(0, 16, productsList);
cart();
