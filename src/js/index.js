import { counterOnScroll } from './modules/counter';
import { swiper } from './modules/swiper-testimonial';

counterOnScroll();
swiper;

const productsList = document.querySelector('.products-home__products');
const loadMoreBtn = document.querySelector('.load-more-btn');
const offersList = document.querySelector('.offers-home__products');

loadMoreBtn.addEventListener('click', loadMoreProducts);

let itemsToShow = 8;
const loadMoreQty = 8;

// load products
function getProducts() {
  fetch('./../data/global.twig.json')
    .then(res => res.json())
    .then(data => {
      const products = data.products;

      insertProducts(products, 0, 8, productsList);
    });
}

// load offers
function getOffers() {
  fetch('./../data/global.twig.json')
    .then(res => res.json())
    .then(data => {
      const products = data.products;

      insertProducts(products, 12, 16, offersList);
    });
}

function insertProducts(array, from, to, list) {
  array.slice(from, to).forEach(product => {
    const price = Number(product.price);
    const discount = Number(product.discount);
    const priceWithDiscount = price - (price * discount) / 100;

    list.insertAdjacentHTML(
      'beforeend',
      `<li class="product">
        <span class="product__tag">${product.tag}</span>
        <img class="product__image" src="${product.image}" alt="vegetable" />
        <div class="product__details">
          <h5 class="product__title">${product.title}</h5>
          <div class="product__footer">
            <span>
              <span class="product__price ${
                product.discount ? 'product__price--discounted' : ''
              }"
              >$${product.price.toFixed(2)}</span>
                ${
                  product.discount
                    ? `<span class="product__discount">
                $${priceWithDiscount.toFixed(2)}
                </span>`
                    : ''
                }
            </span>
            <svg width="84" height="18">
              <use href="./images/icons.svg#icon-stars"></use>
            </svg>
          </div>
        </div>
      </li>`
    );
  });
}

// on load more
function loadMoreProducts() {
  fetch('./../data/global.twig.json')
    .then(res => res.json())
    .then(data => {
      const products = data.products;
      insertProducts(
        products,
        itemsToShow,
        itemsToShow + loadMoreQty,
        productsList
      );

      itemsToShow += loadMoreQty;

      if (itemsToShow >= data.products.length) {
        loadMoreBtn.style.display = 'none';
      }
    });
}

getProducts();
getOffers();
