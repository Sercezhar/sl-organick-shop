export function menu(openBtn, closeBtn, menu) {
  const btnOpen = document.querySelector(openBtn);
  const btnClose = document.querySelector(closeBtn);
  const menuBackdrop = document.querySelector(menu);
  const body = document.querySelector('body');

  window.addEventListener(
    'resize',
    () => window.innerWidth > 1360 && closeMenu()
  );
  btnOpen.addEventListener('click', openMenu);
  btnClose.addEventListener('click', closeMenu);
  menuBackdrop.addEventListener('click', closeMenu);

  const menuActiveClass = `${menu.slice(1)}--active`;

  function openMenu() {
    menuBackdrop.classList.add(menuActiveClass);
    body.classList.add('locked');
  }

  function closeMenu() {
    menuBackdrop.classList.remove(menuActiveClass);
    body.classList.remove('locked');
  }
}
