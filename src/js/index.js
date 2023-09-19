import { cart } from './modules/cart';
import { counterOnScroll } from './modules/counter';
import { handleInsertProducts } from './modules/handleInsertProducts';
import { insertProducts } from './modules/insertProducts';
import { swiper } from './modules/swiper-testimonial';
import { getProducts } from './services/getProducts';

counterOnScroll();
swiper;

const productsList = document.querySelector('.products-home__products');
const loadMoreBtn = document.querySelector('.load-more-btn');
const offersList = document.querySelector('.offers-home__products');

loadMoreBtn.addEventListener('click', loadMoreProducts);

let itemsToShow = 8;
const loadMoreQty = 8;

// on load more
function loadMoreProducts() {
  getProducts().then(products => {
    insertProducts(
      products,
      itemsToShow,
      itemsToShow + loadMoreQty,
      productsList
    );

    itemsToShow += loadMoreQty;

    if (itemsToShow >= products.length) {
      loadMoreBtn.style.display = 'none';
    }
  });
}

await handleInsertProducts(0, 8, productsList);
await handleInsertProducts(12, 16, offersList);
cart();
