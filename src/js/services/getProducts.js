const URL =
  'https://raw.githubusercontent.com/Sercezhar/sl-organick-shop/gh-pages/data/global.twig.json';

export function getProducts() {
  return fetch(URL)
    .then(res => res.json())
    .then(data => data.products);
}
