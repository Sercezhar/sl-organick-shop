import { useDynamicAdapt } from './modules/dynamicAdapt';
import { menu } from './modules/menu';
import { navDropdown } from './modules/navDropdown';

useDynamicAdapt();
menu('.header__burger', '.menu__btn-close', '.menu__backdrop');
menu('.header-actions__button--cart', '.cart__close', '.cart__backdrop');
navDropdown();
