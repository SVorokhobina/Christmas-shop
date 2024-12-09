import '../styles/home.scss';
import { handleBurgerButtonClick, handleMenuLinkClick, handleOpenMenuResize } from './components/burger';

window.onload = function() {
  handleBurgerButtonClick();
  handleMenuLinkClick();
  handleOpenMenuResize();
}
