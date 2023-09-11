export function insertProducts(array, from, to, list) {
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
