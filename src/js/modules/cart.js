export function cart() {
  const addToCartBtn = document.querySelectorAll('.product__button');
  const cartList = document.querySelector('.cart__list');

  const cartItems = JSON.parse(localStorage.getItem('products')) || [];

  // render cart items
  cartItems.forEach(item => {
    insertCartProduct(item);
  });

  toggleCartStatus();

  // disable "add to cart" buttons if already in cart
  addToCartBtn.forEach(button => {
    const alreadyInCart = cartItems.some(
      item => item.id === button.parentNode.parentNode.id
    );

    if (alreadyInCart) {
      disableButton(button);
    }
  });

  // add product to cart
  document.addEventListener('click', event => {
    if (event.target.closest('.product__button')) {
      const product = event.target.parentNode.parentNode;
      const productId = product.id;
      const productImage = product
        .querySelector('.product__image')
        .getAttribute('src');
      const productTitle = product.querySelector('.product__title').innerText;
      const price = {
        normal: product.querySelector('.product__price').innerText,
        discounted: product.querySelector('.product__discount')?.innerText,
      };

      const cartProduct = {
        id: productId,
        image: productImage,
        title: productTitle,
        price: price.discounted ? price.discounted : price.normal,
        quantity: 1,
      };

      insertCartProduct(cartProduct);
      cartItems.push(cartProduct);
      localStorage.setItem('products', JSON.stringify(cartItems));

      disableButton(event.target);
      calcCartQty();
      calcTotalPrice();
      toggleCartStatus();
    }
  });

  // delete product from cart
  document.addEventListener('click', event => {
    if (event.target.closest('.cart-product__delete')) {
      const product = event.target.parentNode;

      const newCartItems = cartItems.filter(item => item.id !== product.id);
      cartItems.splice(0, cartItems.length, ...newCartItems);
      localStorage.setItem('products', JSON.stringify(newCartItems));
      product.remove();

      const prodInList = document.getElementById(product.id);
      const prodInListBackdrop = prodInList.querySelector(
        '.product__button-backdrop'
      );
      const prodInListBtn = prodInList.querySelector('.product__button');

      prodInListBtn.disabled = false;
      prodInListBtn.innerText = 'Add To Cart';
      prodInListBackdrop.style.opacity = '0';
      prodInList.style.pointerEvents = 'all';

      calcCartQty();
      calcTotalPrice();
      toggleCartStatus();
    }
  });

  // increase/decrease product qty
  document.addEventListener('click', event => {
    if (event.target.closest('.product-quantity__button')) {
      const quantity = event.target.parentNode;
      const quantityInput = quantity.querySelector('.product-quantity__input');
      const productId = event.target.closest('.cart-product').id;
      const productIndex = cartItems.findIndex(item => item.id === productId);

      if (event.target.closest('.product-quantity__button--increase')) {
        if (quantityInput.value == 99) {
          return;
        }

        quantityInput.value = ++quantityInput.value;
      }

      if (event.target.closest('.product-quantity__button--decrease')) {
        if (quantityInput.value == 1) {
          return;
        }

        quantityInput.value = --quantityInput.value;
      }

      calcTotalPrice();
      calcCartQty();

      cartItems[productIndex] = {
        ...cartItems[productIndex],
        quantity: quantityInput.value,
      };
      localStorage.setItem('products', JSON.stringify(cartItems));
    }
  });

  function insertCartProduct(item) {
    cartList.insertAdjacentHTML(
      'beforeend',
      `<li class="cart-product" id="${item.id}">
        <img src="${item.image}" alt="${item.title}" />
        <div>
          <h6 class="text text--h6">${item.title}</h6>
          <p class="product__price">${item.price}</p>

          <div class="product-quantity">
            <button class="product-quantity__button product-quantity__button--decrease" type="button">–</button>
            <input class="product-quantity__input" type="text" value="${item.quantity}" />
            <button class="product-quantity__button product-quantity__button--increase" type="button">+</button>
          </div>
        </div>
        <button class="cart-product__delete" type="button">
          <svg width="24" height="24">
						<use href="./images/icons.svg#icon-trash"></use>
					</svg>
        </button>
      </li>`
    );
  }

  function disableButton(button) {
    button.disabled = true;
    button.innerText = 'In Cart';
    button.parentNode.style.opacity = '1';
    button.parentNode.parentNode.style.pointerEvents = 'none';
  }

  function toggleCartStatus() {
    const cartNotify = document.querySelector('.cart__notification');
    const totalPrice = document.querySelector('.cart__total');
    const cartLength = cartList.children.length;

    if (cartLength > 0) {
      cartNotify.classList.add('visually-hidden');
      totalPrice.classList.remove('visually-hidden');
    } else {
      cartNotify.classList.remove('visually-hidden');
      totalPrice.classList.add('visually-hidden');
    }
  }

  function calcCartQty() {
    const cartQtyAll = document.querySelectorAll('.product-quantity__input');
    const cartQty = document.querySelector('.header-actions__cart-qty');

    let totalQty = 0;

    cartQtyAll.forEach(qty => {
      totalQty += parseInt(qty.value);
    });

    cartQty.innerText = `Cart (${totalQty})`;
  }
  calcCartQty();

  function calcTotalPrice() {
    const cartListItems = document.querySelectorAll('.cart-product');
    const totalValue = document.querySelector('.cart__total-value');

    let totalPrice = 0;

    cartListItems.forEach(item => {
      const productQty = item.querySelector('.product-quantity__input');
      const productPrice = item.querySelector('.product__price');
      const currentPrice =
        parseInt(productQty.value) *
        parseFloat(productPrice.innerText.slice(1));

      totalPrice += currentPrice;
    });

    totalValue.innerText = totalPrice.toFixed(2);
  }
  calcTotalPrice();
}
