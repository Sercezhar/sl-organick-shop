export function navDropdown() {
  const container = document.querySelector('.menu-dropdown');
  const trigger = document.querySelector('.menu-dropdown__btn');
  const options = document.querySelector('.menu-dropdown__options');
  const icon = document.querySelector('.menu-dropdown__icon');

  document.addEventListener('click', onClickOutside);

  const triggerActiveClass = 'menu-dropdown__btn--active';
  const iconActiveClass = 'menu-dropdown__icon--rotate';

  function hideOptions() {
    options.classList.add('menu-dropdown__options--hidden');
    trigger.classList.remove(triggerActiveClass);
    icon.classList.remove(iconActiveClass);
  }

  function onClickOutside(event) {
    if (!container.contains(event.target)) {
      hideOptions();
    } else if (trigger.contains(event.target)) {
      options.classList.toggle('menu-dropdown__options--hidden');
      trigger.classList.toggle(triggerActiveClass);
      icon.classList.toggle(iconActiveClass);
    } else {
      return;
    }
  }
}
