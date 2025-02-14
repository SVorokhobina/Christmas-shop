import '../styles/home.scss';
import {
  handleBurgerButtonClick,
  handleMenuLinkClick,
  handleOpenMenuResize,
} from './components/burger';
import { setSliderYear, setTimer } from './components/timer';
import displayRandomCards from './components/random-gift-cards';
import setSlider from './components/slider';

window.onload = function () {
  // burger menu
  handleBurgerButtonClick();
  handleMenuLinkClick();
  handleOpenMenuResize();

  // slider
  setSliderYear();
  setSlider();

  // random gifts
  displayRandomCards();

  // timer
  setTimer();
};
