import { getProducts } from '../services/getProducts';
import { insertProducts } from './insertProducts';

export async function handleInsertProducts(from, to, list) {
  await getProducts().then(products => {
    insertProducts(products, from, to, list);
  });
}
