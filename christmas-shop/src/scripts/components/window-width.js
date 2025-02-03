export function estimateScrollWidth() {
  const fullWidth = window.innerWidth;
  const widthWithoutScroll = document.documentElement.clientWidth;
  const scrollWidth = fullWidth - widthWithoutScroll;
  return scrollWidth;
}

export function increaseDocumentWidth(value) {
  document.documentElement.style.paddingRight = `${value}px`;
  const scrollToTopButton = document.querySelector('.scroll-to-top__button');
  if (scrollToTopButton) {
    scrollToTopButton.style.right = `${value}px`;
  }  
}

export function decreaseDocumentWidth() {
  document.documentElement.style.paddingRight = ``;
  const scrollToTopButton = document.querySelector('.scroll-to-top__button');
  if (scrollToTopButton) {
    scrollToTopButton.style.right = `0`;
  }
}
