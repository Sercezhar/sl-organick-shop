import { handleInsertProducts } from './modules/handleInsertProducts';

const productsList = document.querySelector('.shop-products__list');

handleInsertProducts(0, 16, productsList);
