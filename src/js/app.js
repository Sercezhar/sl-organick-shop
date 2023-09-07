import { burgerMenu } from './modules/burgerMenu';
import { counterOnScroll } from './modules/counter';
import { useDynamicAdapt } from './modules/dynamicAdapt';
import { navDropdown } from './modules/navDropdown';
import { swiper } from './modules/swiper-testimonial';

useDynamicAdapt();
burgerMenu();
navDropdown();
counterOnScroll();
swiper;

const productsList = document.querySelector('.products');
const loadMoreBtn = document.querySelector('.load-more-btn');

loadMoreBtn.addEventListener('click', loadMoreProducts);

let itemsToShow = 8;
const loadMoreQty = 8;

function getProducts() {
  fetch('./../data/index.twig.json')
    .then(res => res.json())
    .then(data => {
      const products = data.products;

      insertProducts(products, 0, 8);
    });
}

function insertProducts(array, from, to) {
  array.slice(from, to).forEach(product => {
    const price = Number(product.price);
    const discount = Number(product.discount);
    const priceWithDiscount = price - (price * discount) / 100;

    productsList.insertAdjacentHTML(
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

function loadMoreProducts() {
  fetch('./../data/index.twig.json')
    .then(res => res.json())
    .then(data => {
      const products = data.products;
      insertProducts(products, itemsToShow, itemsToShow + loadMoreQty);

      itemsToShow += loadMoreQty;

      if (itemsToShow >= data.products.length) {
        loadMoreBtn.style.display = 'none';
      }
    });
}

getProducts();
