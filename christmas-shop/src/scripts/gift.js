import '../styles/gift.scss';
import { handleBurgerButtonClick, handleMenuLinkClick, handleOpenMenuResize } from './components/burger';
import { uploadAllCards, chooseCategory } from './components/category_switch';

window.onload = function() {
  // gift category switching
  uploadAllCards();
  chooseCategory();

  // burger menu
  handleBurgerButtonClick();
  handleMenuLinkClick();
  handleOpenMenuResize();
}