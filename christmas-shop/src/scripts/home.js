import '../styles/home.scss';
import { handleBurgerButtonClick, handleMenuLinkClick, handleOpenMenuResize } from './components/burger';
import { setSliderYear, setTimer } from './components/timer';
import displayRandomCards from './components/random-gift-cards';

window.onload = function() {
  // burger menu
  handleBurgerButtonClick();
  handleMenuLinkClick();
  handleOpenMenuResize();

  // slider
  setSliderYear();

  // random gifts
  displayRandomCards();

  // timer
  setTimer();
}
