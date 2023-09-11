export function getProducts() {
  return fetch('./../data/global.twig.json')
    .then(res => res.json())
    .then(data => data.products);
}
