export function burgerMenu() {
  const btnOpen = document.querySelector('.header__burger');
  const btnClose = document.querySelector('.menu__btn-close');
  const menu = document.querySelector('.menu__backdrop');
  const body = document.querySelector('body');

  window.addEventListener(
    'resize',
    () => window.innerWidth > 1360 && closeMenu()
  );
  btnOpen.addEventListener('click', openMenu);
  btnClose.addEventListener('click', closeMenu);
  menu.addEventListener('click', closeMenu);

  function openMenu() {
    menu.classList.add('menu__backdrop--active');
    btnOpen.classList.add('header__burger--active');
    body.classList.add('locked');
  }

  function closeMenu() {
    menu.classList.remove('menu__backdrop--active');
    btnOpen.classList.remove('header__burger--active');
    body.classList.remove('locked');
  }
}
