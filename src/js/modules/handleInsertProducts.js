import { getProducts } from '../services/getProducts';
import { insertProducts } from './insertProducts';

export function handleInsertProducts(from, to, list) {
  getProducts().then(products => {
    insertProducts(products, from, to, list);
  });
}
