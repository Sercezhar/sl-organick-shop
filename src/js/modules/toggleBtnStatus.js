export function toggleBtnStatus(productId, disable = true) {
  const prodInList = document.querySelectorAll(`main [id="${productId}" ]`);

  prodInList.forEach(product => {
    const prodInListBackdrop = product.querySelector(
      '.product__button-backdrop'
    );
    const prodInListBtn = product.querySelector('.product__button');

    if (disable) {
      prodInListBtn.disabled = true;
      prodInListBtn.innerText = 'In Cart';
      prodInListBackdrop.style.opacity = '1';
      product.style.pointerEvents = 'none';
    } else {
      prodInListBtn.disabled = false;
      prodInListBtn.innerText = 'Add To Cart';
      prodInListBackdrop.style.opacity = '0';
      product.style.pointerEvents = 'all';
    }
  });
}
