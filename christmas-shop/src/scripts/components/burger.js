import { estimateScrollWidth, increaseDocumentWidth, decreaseDocumentWidth } from '../components/window-width';

const button = document.querySelector('.burger-button');
const menu = document.querySelector('.header__navigation');
const body = document.body;

export function handleBurgerButtonClick() {
  button.addEventListener('click', (e) => {
    const targetButton = e.target;
    if (targetButton.classList.contains('open') !== true) {
      openBurgerMenu();
    } else {
      closeBurgerMenu();
    }
  });
}

export function handleMenuLinkClick() {
  const links = document.querySelectorAll('.navigation__elem');
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      if (menu.classList.contains('open') === true) {
        closeBurgerMenu();        
      }
    })
  });
}

export function handleOpenMenuResize() {
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      closeBurgerMenu()
    }
  });
}

function openBurgerMenu() {
  const scrollWidth = estimateScrollWidth();
  increaseDocumentWidth(scrollWidth);

  button.classList.add('open');
  menu.classList.add('open');
  body.classList.add('open-menu');
}

function closeBurgerMenu() {
  decreaseDocumentWidth();
  button.classList.remove('open');
  menu.classList.remove('open');
  body.classList.remove('open-menu');
}
