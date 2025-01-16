import '../styles/home.scss';
import { handleBurgerButtonClick, handleMenuLinkClick, handleOpenMenuResize } from './components/burger';
import { setSliderYear, setTimer } from './components/timer';

window.onload = function() {
  // burger menu
  handleBurgerButtonClick();
  handleMenuLinkClick();
  handleOpenMenuResize();

  // slider
  setSliderYear();

  // timer
  setTimer();
}
