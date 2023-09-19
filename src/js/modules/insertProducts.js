export function insertProducts(array, from, to, list) {
  array.slice(from, to).forEach(product => {
    const price = Number(product.price);
    const discount = Number(product.discount);
    const priceWithDiscount = price - (price * discount) / 100;

    list.insertAdjacentHTML(
      'beforeend',
      `<li class="product" id="${product.id}">
        <span class="product__tag">${product.tag}</span>
        <img class="product__image" src="${product.image}" alt="${
        product.title
      }" />
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
        <div class="product__button-backdrop">
          <button class="product__button" type="button">Add To Cart</button>
        </div>
      </li>`
    );
  });
}
